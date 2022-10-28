import { defineStore } from "pinia";
import { db } from "../firebase/firebase"
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

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
                console.log(error);
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

        updateRating(id, newRating) {
            const bookRef = doc(db, 'books', id);
            setDoc(bookRef, { rating: newRating }, {merge: true});
        }
    }
});