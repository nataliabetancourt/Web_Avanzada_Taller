import { defineStore } from "pinia";
import { db } from "../firebase/firebase"
import { collection, doc, getDoc, getDocs, setDoc, deleteDoc} from "firebase/firestore";

export const useFirestoreStore = defineStore("firestore", {
    state: () => ({
        db: db,
    }),

    actions: {
        async addUserDatabase(userId, userInfo = {}) {
            try {
                await setDoc(doc(db, "users", userId), userInfo);
            } catch (e) {
                console.log(e)
            }
        },

        async addBook(id, book) {
            try {
                await setDoc(doc(db, "books", id), book);
                console.log("Book added");
            } catch (error) {
                alert(error);
            }
        },

        async getBooks() {
            const collectionRef = collection(db, "books");
            try {
                const { docs } = await getDocs(collectionRef);
                const books = docs.map((doc) => {
                    return {
                        ...doc.data(),
                    };
                });
                return books;
            } catch (error) {
                console.log(error);
            }
        },

        async getSingleBook(id) {
            const docRef = doc(db, "books", id);
            try {
                const docSnap = await getDoc(docRef);
                const data = docSnap.data();
                return data;
            } catch (error) {
                console.log(error);
            }
        },

        async getUser(id) {
            const docRef = doc(db, "users", id);
            try {
                const docSnap = await getDoc(docRef);
                const data = docSnap.data();
                return data;
            } catch (error) {
                console.log(error);
            }
        },

        addUserRatingList(id, ratingValue) {
            const userRef = doc(db, 'users', id);
            setDoc(userRef, { rating: ratingValue }, {merge: true});
        },

        addBookRatingList(id, ratingValue){
            const bookRef = doc(db, 'books', id);
            setDoc(bookRef, { ratingList: ratingValue }, {merge: true});
        },

        async createCart(id, cartValue) {
            const userRef = doc(db, 'users', id);
            setDoc(userRef, { cart: cartValue }, {merge: true});
            console.log("added to cart")
        },

        async getCart(id) {
            const docRef = doc(db, "users", id);
            const docSnap = await getDoc(docRef);
            const result = docSnap.data();
            return result.cart;
        },

        changeBookRating(book) {
            let sum = 0;
            let list = book.ratingList;
            list.push(book.rating);

            list.forEach(function(num) { sum += num });

            let average = sum/list.length;
            
            const bookRef = doc(db, 'books', book.id);
            setDoc(bookRef, { rating: average.toFixed(2) }, {merge: true});
        },

        async editBook(id, book) {
            try {
                await setDoc(doc(db, "books", id), book);
                alert("Book has been edited successfully");
            } catch (error) {
                console.log(error);
            }
        },

        async deleteBook(id) {
            try {
                await deleteDoc(doc(db, "books", id));
                alert("Deleted book successfully");
            } catch (error) {
                console.log(error);
            }
        } 
    }
});