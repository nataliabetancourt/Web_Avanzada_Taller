import { defineStore } from "pinia";
import { auth, db } from "../firebase/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, deleteUser } from "firebase/auth";
import { async } from "@firebase/util";
import { deleteDoc, doc } from "firebase/firestore";

export const useAuthenticationStore = defineStore("authentication", {
    state: () => ({
        auth: auth,
        userLogged: null,
        isAdmin: false
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

                    if (user.uid == "Be9UXHWFcyREhEDwxyN2qepH0Pp2") {
                        this.isAdmin = true;
                    }
                } else {
                    console.log("No user")
                }
            })

            return this.userLogged; 
        },

        getIsAdmin() {
            return this.isAdmin;
        },

        async deleteAccount() {
            const user = auth.currentUser;
            await deleteDoc(doc(db, "users", user.uid));
            console.log(user);

            deleteUser(user).then(() => {
                alert("User has been deleted");
                location.reload();

            }).catch((error) => {
                console.log(error);
            });
        }
    }
});