import { defineStore } from "pinia";

export const useBooksStore = defineStore("books", {
    state: () => ({
        books: [                       
        ],
        localStorageBooks: [],
        genreValues: ["CLASSICS", "HORROR", "SCI-FI", "ROMANCE", "FANTASY", "THRILLER"],
        ratingValues: [1, 2, 3, 4],
        priceValues: ["5-10", "10-15", "15"]
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
            if (this.localStorageBooks != null) {
                this.books = this.books.concat([...this.localStorageBooks]);
                this.removeDuplicates();
            }
        },

        removeDuplicates() {
            //Remove duplicates
            const differentIds = [];
            const removeDuplicates = this.books.filter (book => {
                const isDuplicate = differentIds.includes(book.id);

                if (!isDuplicate) {
                    differentIds.push(book.id);
                    return true;
                }

                return false;
            });

            this.books = removeDuplicates;
        },

        getBookById(id) {
            const filteredBooks = this.books.filter((book) => id === book.id);
            return filteredBooks ? {...filteredBooks[0] } : null
        },

        filterBooks(filter) {
            //Run through genre list values
            for (let index = 0; index < this.genreValues.length; index++) {
                //Check if variable is equal to genre values
                if (filter == this.genreValues[index]) {
                    const genreFilteredBooks = this.books.filter((book) => book.genre == filter);
                    return genreFilteredBooks;
                } 
            }

            //Run through rating list values
            for (let index = 0; index < this.ratingValues.length; index++) {
                //Check if variable is equal to rating values
                if (filter == this.ratingValues[index]) {
                    const ratingFilteredBooks = this.books.filter((book) => book.rating > filter);
                    return ratingFilteredBooks;
                }
                
            }

            for (let index = 0; index < this.priceValues.length; index++) {
                //Check if variable is equal to price values
                if (filter == this.priceValues[index]) {
                    let priceFilteredBooks = [];
                    switch (filter) {
                        case "5-10":
                            priceFilteredBooks = this.books.filter((book) => 5 < book.price < 10);
                        break;
                        case "10-15":
                            priceFilteredBooks = this.books.filter((book) => 10 < book.price < 15);
                        break;
                        case "15":
                            priceFilteredBooks = this.books.filter((book) => 15 < book.price);
                        break;
                    }

                    return priceFilteredBooks;
                }
            }


        },
    }
});