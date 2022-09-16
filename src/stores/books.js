import { defineStore } from "pinia";

export const useBooksStore = defineStore("books", {
    state: () => ({
        books: [],
        localStorageBooks: []
    }),

    getters: {
        getBooks: (state) => [...state.books]
    },

    actions: {
        newBook(book) {
            //Add to local storage
            this.localStorageBooks.push(book);
            //Add to list
            this.books.push(book);
            localStorage.setItem('books', JSON.stringify(this.localStorageBooks));
        },

        loadProducts() {
            this.localStorageBooks = JSON.parse(localStorage.getItem('books'));
            this.books = this.books.concat([...this.localStorageBooks]);
        }
    }
});