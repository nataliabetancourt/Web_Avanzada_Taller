import { defineStore } from "pinia";
import { auth } from "../firebase/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { async } from "@firebase/util";

export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        auth: auth,
        userLogged: null
    }),

    actions: {
        async signIn(email, password) {
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password);
                console.log("Logged in");
            } catch (error) {
                alert(error.message)
            }
        },

        async signUp(email, password) {
            try {
                const {user} = await createUserWithEmailAndPassword(auth, email, password);
                console.log("Signed up");
                return user;
            } catch (error) {
                alert(error.message);
            }
        },

        logOut() {
            signOut(auth).then(() => {
                console.log("Logged out")
            }).catch((error) => {
                alert(error);
            })
        },

        getUser() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.userLogged = user;
                } else {
                    console.log("No user")
                }
            })

            return this.userLogged;
        }
    }
});