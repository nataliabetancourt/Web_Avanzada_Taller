import { doc } from "firebase/firestore";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test, vi, vitest } from "vitest";
import { useFirestoreStore } from "../firestore";

describe("Firestore store", () => {

    vi.mock("../firebase/firebase", () => ({ db: "mock" }))

    vi.mock("../firebase/db", () => {
        const setDoc = vitest.fn(() => Promise.resolve({ title: "Book" }));
        const addBook = vitest.fn(() => Promise.resolve({ title: "Book" }));
        const getBooks = vitest.fn(() => [{ title: "Book1" }, { title: "Book2" }]);
        const getSingleBook = vitest.fn(() => { title: "Book1" });
        const getUser = vitest.fn(() => { user: "1234" });
        const editBook = vitest.fn(() => { book: "Book" });

        return {
            setDoc,
            addBook,
            getBooks,
            getSingleBook,
            getUser,
            editBook,
        };
    });

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test("Book and user has been added"), async () => {
        const firestore = useFirestoreStore();

        console.log = vitest.fn();

        await firestore.setDoc(doc(db, "books", 'id'), 'book');

        expect(console.log).toHaveBeenCalledWith("Book added");
    }

    test("All books load correctly", async () => {
        const firestore = useFirestoreStore();

        const books = await firestore.getBooks();

        expect(books).not.toBeNull();
    });

    test("Single book loads correctly", async () => {
        const firestore = useFirestoreStore();

        const singleBook = await firestore.getSingleBook('id');

        expect(singleBook).not.toBeNull();
    });

    test("Get user correctly", async () => {
        const firestore = useFirestoreStore();

        const user = await firestore.getUser('id');

        expect(user).not.toBeNull();
    });
});