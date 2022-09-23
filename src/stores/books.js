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
            //Add to local storage list
            this.localStorageBooks.push(book);
            //Add to list
            this.books.push(book);
            localStorage.setItem('books', JSON.stringify(this.books));
        },

        loadBooks() {
            this.localStorageBooks = JSON.parse(localStorage.getItem('books'));
            this.books = this.books.concat([...this.localStorageBooks]);
        },

        getBookById(id) {
            const filteredProducts = this.books.filter((book) => id === book.id);
            return filteredProducts ? {...filteredProducts[0] } : null
        },
    }
});