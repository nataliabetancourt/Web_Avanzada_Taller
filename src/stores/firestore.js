import { defineStore } from "pinia";
import { db } from "../firebase/firebase"
import { doc, setDoc } from "firebase/firestore";

export const useFirestoreStore = defineStore("firestore", {
    state: () => ({
        db: db
    }),

    actions: {
        async addUserDatabase(userId, userInfo = {}) {
            try {
                await setDoc(doc(db, "users", userId), userInfo);
            } catch (e) {
                console.log(e)
            }
        }
    }
});