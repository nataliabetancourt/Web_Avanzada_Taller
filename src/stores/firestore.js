import { defineStore } from "pinia";
import { db, storage } from "../firebase/firebase"
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const useFirestoreStore = defineStore("firestore", {
    state: () => ({
        db: db,
        storage: storage
    }),

    actions: {
        async addUserDatabase(userId, userInfo = {}) {
            try {
                await setDoc(doc(db, "users", userId), userInfo);
            } catch (e) {
                console.log(e)
            }
        },

        async addBook(book) {
            try {
                await addDoc(collection(db, "books"), book);
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

            console.log(books);
        }

        /*async imageUploadReference(image) {
            const storageRef = ref(storage, `books/images/${image.name}`);
            return await uploadBytes(storageRef, image);
        },

        async uploadImages(images = []){
            const uploadedImages = images.map(async (image) => {
                const imgRef = await this.imageUploadReference(image);
                return getDownloadURL(ref(storage, imgRef.ref.fullPath));
            });

            return uploadedImages;
        }*/
    }
});