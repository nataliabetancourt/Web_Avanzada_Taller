import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test, vitest } from "vitest";
import { useAuthenticationStore } from "../authentication";

describe("Authentication store", () => {

    vi.mock("../firebase/firebase", () => ({ auth: "mock", db: "mock"}));

    vi.mock("../firebase/auth", () => {
        const signInWithEmailAndPassword = vitest.fn(() => Promise.resolve({ user: "1234" }));
        const createUserWithEmailAndPassword = vitest.fn(() => Promise.resolve({ user: "1234" }));
        const onAuthStateChanged = vitest.fn(() => Promise.resolve({ user: "1234" }));
        const signOut = vitest.fn(() => Promise.resolve(undefined));

        return {
            signInWithEmailAndPassword,
            createUserWithEmailAndPassword,
            signOut,
            onAuthStateChanged
        };
    });

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test("User logged is null", () => {
        const authentication = useAuthenticationStore();

        expect(authentication.userLogged).toBeNull();
    });

    test("Admin is set to false", () => {
        const authentication = useAuthenticationStore();

        expect(authentication.isAdmin).toBeFalsy();
    })

    test("User is signed in"), async () => {
        const authentication = useAuthenticationStore();

        console.log = vitest.fn();

        await authentication.signIn('email', 'password');

        expect(console.log).toHaveBeenCalledWith("Logged in");
    }

    test("Get back user information"), async () => {
        const authentication = useAuthenticationStore();

        await authentication.signIn('email', 'password');

        expect(authentication.getUser()).not.toBeNull();
    }

    test("Get no user information because there was no sign in"), async () => {
        const authentication = useAuthenticationStore();

        console.log = vitest.fn();

        expect(console.log).toEqual("No user");
    }
});

