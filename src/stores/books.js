import { defineStore } from "pinia";

export const useBooksStore = defineStore("books", {
    state: () => ({
        books: [
            {
                'id': "it-starts-with-us",
                'title': "It Starts With Us",
                'author': "Colleen Hoover",
                'price': 17.99,
                'description': "Before It Ends with Us, it started with Atlas. Colleen Hoover tells fan favorite Atlas’s side of the story and shares what comes next in this long-anticipated sequel to the “glorious and touching” (USA TODAY) #1 New York Times bestseller It Ends with Us." + "\n" +
                "Lily and her ex-husband, Ryle, have just settled into a civil coparenting rhythm when she suddenly bumps into her first love, Atlas, again. After nearly two years separated, she is elated that for once, time is on their side, and she immediately says yes when Atlas asks her on a date." + "\n" +
                "But her excitement is quickly hampered by the knowledge that, though they are no longer married, Ryle is still very much a part of her life—and Atlas Corrigan is the one man he will hate being in his ex-wife and daughter’s life." + "\n" + 
                "Switching between the perspectives of Lily and Atlas, It Starts with Us picks up right where the epilogue for the “gripping, pulse-pounding” (Sarah Pekkanen, author of Perfect Neighbors) bestselling phenomenon It Ends with Us left off. Revealing more about Atlas’s past and following Lily as she embraces a second chance at true love while navigating a jealous ex-husband, it proves that “no one delivers an emotional read like Colleen Hoover” (Anna Todd, New York Times bestselling author).",
                'genre': "ROMANCE",
                'rating': 5,
                'image': "https://m.media-amazon.com/images/I/71PNGYHykrL.jpg"
            },
            {
                'id': "the-shining",
                'title': "The Shining",
                'author': "Stephen King",
                'price': 13.99,
                'description': "#1 NEW YORK TIMES BESTSELLER • Before Doctor Sleep, there was The Shining, a classic of modern American horror from the undisputed master, Stephen King." + "\n" + 
                "Jack Torrance’s new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he’ll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote . . . and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.",
                'genre': "HORROR",
                'rating': 4.5,
                'image': "https://m.media-amazon.com/images/I/41gcbw-zBoL.jpg"
            },
            {
                'id': "pride-and-prejudice",
                'title': "Pride and Prejudice",
                'author': "Jane Austen",
                'price': 9.99,
                'description': "As the Bennets prepare their five grown daughters to enter into society, each shows personality traits that illuminate their future prospects as wives. Jane, the oldest, is the most demure and traditional, and Lydia, the youngest, the most headstrong and impulsive. Attention centers on haughty second-born Elizabeth, and her blossoming relationship with the dashing but aloof Fitzwilliam Darcy. Adversaries at first in the endless rounds of balls, parties, and social gatherings, they soon develop a grudging respect for one another that blossoms into romance when each comes to appreciate the tender feelings that course beneath the veneer of their propriety and reserve." + "\n" + 
                "First published in 1813, Pride and Prejudice is one of the most popular novels in English literature and a cornerstone of Jane Austen's reputation as one of the greatest novelists of all time. This volume is one of Barnes & Noble's Collectible Editions classics. Each volume features authoritative texts by the world's greatest authors in an exquisitely designed foil-stamped binding, with distinctive colored edging and an attractive ribbon bookmark. Decorative, durable, and collectible, these books offer hours of pleasure to readers young and old and are an indispensable cornerstone for any home library.",
                'genre': "CLASSICS",
                'rating': 3.5,
                'image': "https://ae01.alicdn.com/kf/HTB1wihvPpXXXXa7XXXXq6xXFXXXM/Pride-And-Prejudice-Book-Cover-Locket-Necklace-keyring-silver-Bronze-tone-B0964.jpg"
            },
            {
                'id': "the-silmarillion",
                'title': "The Silmarillion",
                'author': "J R. R. Tolkien",
                'price': 21.99,
                'description': "The Silmarillion is the core of J.R.R. Tolkien's imaginative writing, a work whose origins stretch back to a time long before The Hobbit. This mythopoetic masterpiece is a must-read before you watch The Lord of the Rings: The Rings of Power on Prime Video." + "\n" + 
                "The story of the creation of the world and of the First Age, this is the ancient drama to which the characters in The Lord of the Rings look back and in whose events some of them, such as Elrond and Galadriel, took part. The three Silmarils were jewels created by Fëanor, most gifted of the Elves. Within them was imprisoned the Light of the Two Trees of Valinor before the Trees themselves were destroyed by Morgoth, the first Dark Lord. Thereafter, the unsullied Light of Valinor lived on only in the Silmarils, but they were seized by Morgoth and set in his crown, which was guarded in the impenetrable fortress of Angband in the north of Middle-earth." + "\n" + 
                "The Silmarillion is the history of the rebellion of Fëanor and his kindred against the gods, their exile from Valinor and return to Middle-earth, and their war, hopeless despite all their heroism, against the great Enemy.",
                'genre': "SCI-FI",
                'rating': 2,
                'image': "https://kbimages1-a.akamaihd.net/628e877c-6a1e-46ce-bb5e-6a4f12877773/1200/1200/False/the-silmarillion.jpg"
            },
            {
                'id': "a-court-of-silver-flames",
                'title': "A Court of Silver Flames",
                'author': "Sarah J. Maas",
                'price': 9.99,
                'description': "Sarah J. Maas's sexy, richly imagined series continues with the journey of Feyre's fiery sister, Nesta." + "\n" + 
                "Nesta Archeron has always been prickly-proud, swift to anger, and slow to forgive. And ever since being forced into the Cauldron and becoming High Fae against her will, she's struggled to find a place for herself within the strange, deadly world she inhabits. Worse, she can't seem to move past the horrors of the war with Hybern and all she lost in it." + "\n" + 
                "The one person who ignites her temper more than any other is Cassian, the battle-scarred warrior whose position in Rhysand and Feyre's Night Court keeps him constantly in Nesta's orbit. But her temper isn't the only thing Cassian ignites. The fire between them is undeniable, and only burns hotter as they are forced into close quarters with each other." + "\n" + 
                "Meanwhile, the treacherous human queens who returned to the Continent during the last war have forged a dangerous new alliance, threatening the fragile peace that has settled over the realms. And the key to halting them might very well rely on Cassian and Nesta facing their haunting pasts." + "\n" + 
                "Against the sweeping backdrop of a world seared by war and plagued with uncertainty, Nesta and Cassian battle monsters from within and without as they search for acceptance-and healing-in each other's arms.",
                'genre': "FANTASY",
                'rating': 4.5,
                'image': "https://images-na.ssl-images-amazon.com/images/I/91ajvO3vlnL.jpg"
            },
            {
                'id': "all-good-people-here",
                'title': "All Good People Here",
                'author': "Ashley Flowers",
                'price': 23.99,
                'description': "You can’t ever know for sure what happens behind closed doors." + "\n" +

                "Everyone from Wakarusa, Indiana, remembers the infamous case of January Jacobs, who was discovered in a ditch hours after her family awoke to find her gone. Margot Davies was six at the time, the same age as January—and they were next-door neighbors. In the twenty years since, Margot has grown up, moved away, and become a big-city journalist. But she’s always been haunted by the feeling that it could’ve been her. And the worst part is, January’s killer has never been brought to justice." + "\n" +
                
                "When Margot returns home to help care for her uncle after he is diagnosed with early-onset dementia, she feels like she’s walked into a time capsule. Wakarusa is exactly how she remembers—genial, stifled, secretive. Then news breaks about five-year-old Natalie Clark from the next town over, who’s gone missing under circumstances eerily similar to January’s. With all the old feelings rushing back, Margot vows to find Natalie and to solve January’s murder once and for all." + "\n" +
                
                "But the police, Natalie’s family, the townspeople—they all seem to be hiding something. And the deeper Margot digs into Natalie’s disappearance, the more resistance she encounters, and the colder January’s case feels. Could January’s killer still be out there? Is it the same person who took Natalie? And what will it cost to finally discover what truly happened that night twenty years ago?" + "\n" +
                
                "Twisty, chilling, and intense, All Good People Here is a searing tale that asks: What are your neighbors capable of when they think no one is watching?",
                'genre': "THRILLER",
                'rating': 1.5,
                'image': "https://images-na.ssl-images-amazon.com/images/I/81XQ1+piiiL.jpg"
            },
            {
                'id': "the-final-girl-support-group",
                'title': "The Final Girl Support Group",
                'author': "Grady Hendrix",
                'price': 13.99,
                'description': "In horror movies, the final girls are the ones left standing when the credits roll. They made it through the worst night of their lives…but what happens after?"  + "\n" +

                "Like his bestselling novel The Southern Book Club’s Guide to Slaying Vampires, Grady Hendrix’s latest is a fast-paced, frightening, and wickedly humorous thriller. From chain saws to summer camp slayers, The Final Girl Support Group pays tribute to and slyly subverts our most popular horror films—movies like The Texas Chainsaw Massacre, A Nightmare on Elm Street, and Scream."  + "\n" +
                
                "Lynnette Tarkington is a real-life final girl who survived a massacre. For more than a decade, she’s been meeting with five other final girls and their therapist in a support group for those who survived the unthinkable, working to put their lives back together. Then one woman misses a meeting, and their worst fears are realized—someone knows about the group and is determined to rip their lives apart again, piece by piece."  + "\n" +
                 
                "But the thing about final girls is that no matter how bad the odds, how dark the night, how sharp the knife, they will never, ever give up.",
                'genre': "HORROR",
                'rating': 3.5,
                'image': "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1614275199i/55829194.jpg"
            },
            {
                'id': "the-black-phone",
                'title': "The Black Phone",
                'author': "Joe Hill",
                'price': 8.49,
                'description': "Jack Finney is thirteen, alone, and in desperate trouble. For two years now, someone has been stalking the boys of Galesberg, stealing them away, never to be seen again. And now, Finney finds himself in danger of joining them: locked in a psychopath’s basement, a place stained with the blood of half a dozen murdered children."  + "\n" +

                "With him in his subterranean cell is an antique phone, long since disconnected . . . but it rings at night anyway, with calls from the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
                'genre': "HORROR",
                'rating': 4,
                'image': "http://prodimage.images-bn.com/pimages/9780063214835_p0_v2_s1200x630.jpg"
            },
            {
                'id': "hook-line-and-sinker",
                'title': "Hook, Line, and Sinker",
                'author': "Tessa Bailey",
                'price': 12.99,
                'description': "In the follow-up to It Happened One Summer, Tessa Bailey delivers another deliciously fun rom-com about a former player who accidentally falls for his best friend while trying to help her land a different man…" + "\n" +

                "King crab fisherman Fox Thornton has a reputation as a sexy, carefree flirt. Everyone knows he’s a guaranteed good time—in bed and out—and that’s exactly how he prefers it. Until he meets Hannah Bellinger. She’s immune to his charm and looks, but she seems to enjoy his… personality? And wants to be friends? Bizarre. But he likes her too much to risk a fling, so platonic pals it is." + "\n" +
                
                "Now, Hannah's in town for work, crashing in Fox’s spare bedroom. She knows he’s a notorious ladies’ man, but they’re definitely just friends. In fact, she's nursing a hopeless crush on a colleague and Fox is just the person to help with her lackluster love life. Armed with a few tips from Westport’s resident Casanova, Hannah sets out to catch her coworker’s eye… yet the more time she spends with Fox, the more she wants him instead. As the line between friendship and flirtation begins to blur, Hannah can't deny she loves everything about Fox, but she refuses to be another notch on his bedpost. " + "\n" +
                
                "Living with his best friend should have been easy. Except now she’s walking around in a towel, sleeping right across the hall, and Fox is fantasizing about waking up next to her for the rest of his life and… and… man overboard! He’s fallen for her, hook, line, and sinker. Helping her flirt with another guy is pure torture, but maybe if Fox can tackle his inner demons and show Hannah he’s all in, she'll choose him instead?",
                'genre': "ROMANCE",
                'rating': 5,
                'image': "https://images-na.ssl-images-amazon.com/images/I/71DxOnGLc7L.jpg"
            },
            {
                'id': "book-lovers",
                    'title': "Book Lovers",
                    'author': "Emily Henry",
                    'price': 14.99,
                    'description': "The only people Nora Stephens is a heroine for are her clients, for whom she lands enormous deals as a cutthroat literary agent, and her sister Libby. Which is why she agrees to go to North Carolina when Libby begs her for a sisters' trip away - with visions of a transformation for Nora, who she's convinced needs to become the heroine in her own story. But instead of picnics in meadows, or run-ins with a handsome doctor or bulging-forearmed bartender, Nora keeps bumping into Charlie Lastra, a brooding editor from back in the city. As they are thrown together what they discover might just unravel the carefully crafted stories they've written about themselves.",
                    'genre': "ROMANCE",
                    'rating': 2,
                    'image': "https://images-na.ssl-images-amazon.com/images/I/71tP2vAr70L.jpg"
                },
                {
                    'id': "light-from-uncommon-stars",
                    'title': "Light From Uncommon Stars",
                    'author': "Ryka Aoki",
                    'price': 5.99,
                    'description': "Shizuka Satomi made a deal with the devil: to escape damnation, she must entice seven other violin prodigies to trade their souls for success. She has already delivered six." + "\n" +

                    "When Katrina Nguyen, a young transgender runaway, catches Shizuka's ear with her wild talent, Shizuka can almost feel the curse lifting. She's found her final candidate." + "\n" +
                    
                    "But in a donut shop off a bustling highway in the San Gabriel Valley, Shizuka meets Lan Tran, retired starship captain, interstellar refugee, and mother of four. Shizuka doesn't have time for crushes or coffee dates, what with her very soul on the line, but Lan's kind smile and eyes like stars might just redefine a soul's worth. And maybe something as small as a warm donut is powerful enough to break a curse as vast as the California coastline." + "\n" +
                    
                    "As the lives of these three women become entangled by chance and fate, a story of magic, identity, curses, and hope begins, and a family worth crossing the universe for is found.",
                    'genre': "SCI-FI",
                    'rating': 1,
                    'image': "https://images-na.ssl-images-amazon.com/images/I/71le0LP8FHL.jpg"
                },
                {
                    'id': "fairy-tale",
                    'title': "Fairy Tale",
                    'author': "Stephen King",
                    'price': 18.99,
                    'description': "Charlie Reade looks like a regular high school kid, great at baseball and football, a decent student. But he carries a heavy load. His mom was killed in a hit-and-run accident when he was ten, and grief drove his dad to drink. Charlie learned how to take care of himself—and his dad. When Charlie is seventeen, he meets a dog named Radar and her aging master, Howard Bowditch, a recluse in a big house at the top of a big hill, with a locked shed in the backyard. Sometimes strange sounds emerge from it." + "\n" +

                    "Charlie starts doing jobs for Mr. Bowditch and loses his heart to Radar. Then, when Bowditch dies, he leaves Charlie a cassette tape telling a story no one would believe. What Bowditch knows, and has kept secret all his long life, is that inside the shed is a portal to another world." + "\n" +
                    
                    "King’s storytelling in Fairy Tale soars. This is a magnificent and terrifying tale in which good is pitted against overwhelming evil, and a heroic boy—and his dog—must lead the battle.",
                    'genre': "FANTASY",
                    'rating': 3,
                    'image': "https://images-na.ssl-images-amazon.com/images/I/81PMOtoT7zL.jpg"
                },
                {
                    'id': "the-enigma-of-room-662",
                    'title': "The Enigma of Room 622",
                    'author': "Joël Dicker",
                    'price': 24.99,
                    'description': "A burnt-out writer’s retreat at a fancy Swiss hotel is interrupted by a murder mystery in this metafictional, meticulously crafted whodunit from the New York Times bestselling author of The Truth About the Harry Quebert Affair." + "\n" +

                    "A writer named Joël, Switzerland’s most prominent novelist, flees to the Hôtel de Verbier, a luxury resort in the Swiss Alps. Disheartened over a recent breakup and his longtime publisher’s death, Joël hopes to rest. However, his plans quickly go awry. It all starts with a seemingly innocuous detail: at the Verbier, there is no room 622." + "\n" +
                    
                    "Before long, Joël and fellow guest Scarlett uncover a long-unsolved murder that transpired in the hotel's room 622. The attendant circumstances: the succession of Switzerland’s largest private bank, a mysterious counterintelligence operation called P-30, and a most disreputable sabotage of hotel hospitality. A European phenomenon, The Enigma of Room 622 is a matryoshka doll of intrigue–as precise as a Swiss watch–and Dicker’s most diabolically addictive thriller yet.",
                    'genre': "THRILLER",
                    'rating': 4,
                    'image': "https://m.media-amazon.com/images/I/51GNl1hEsEL.jpg"
                },
                {
                    'id': "to-kill-a-mockingbird",
                    'title': "To Kill a Mockingbird",
                    'author': "Harper Lee",
                    'price': 12.99,
                    'description': "Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred"  + "\n" +

                    "One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.",
                    'genre': "CLASSICS",
                    'rating': 2,
                    'image': "https://www.glbooks.com.co/wp-content/uploads/2021/10/Kill.jpg"
                },
            {
                'id': "frankenstein",
                'title': "Frankenstein",
                'author': "Mary Shelley",
                'price': 6.99,
                'description': "Stepping far afield from his medical studies, Victor Frankenstein brings to life a human form he has fashioned from scavenged body parts. Horrified by his achievement, he turns his back on his creation, only to learn the danger of such neglect. Written when Mary Shelley was only 20 years old, Frankenstein has been hailed as both a landmark of Gothic horror fiction and the first modern science fiction story.",
                'genre': "CLASSICS",
                'rating': 3.5,
                'image': "https://covers.openlibrary.org/b/id/10453487-L.jpg"
            },
            {
                'id': "dracula",
                'title': "Dracula",
                'author': "Bram Stoker",
                'price': 15.99,
                'description': "Acting on behalf of his firm of solicitors, Jonathan Harker travels to the Carpathian Mountains to finalize the sale of England's Carfax Abbey to Transylvanian noble Count Dracula. Little does he realize that, in doing so, he endangers all that he loves. For Dracula is one of the Un-dead—a centuries-old vampire who sleeps by day and stalks by night, feasting on the blood of his helpless victims. Once on English soil, the count sets his sights on Jonathan's circle of associates, among them his beloved wife Mina. To thwart Dracula's evil designs, Jonathan and his friends will have to accept as truth the most preposterous superstitions concerning vampires, and in the company of legendary vampire hunter Abraham Van Helsing, embark on an unholy adventure for which even their worst nightmares have not prepared them." + "\n" +
 
                "First published in 1897, Bram Stoker's Dracula established the ground rules for virtually all vampire fiction written in its wake. This volume is one of Barnes & Noble's Collectible Editions classics. Each volume features authoritative texts by the world's greatest authors in an exquisitely designed foil-stamped binding, with distinctive colored edging and an attractive ribbon bookmark. Decorative, durable, and collectible, these books offer hours of pleasure to readers young and old and are an indispensable cornerstone for any home library.",
                'genre': "CLASSICS",
                'rating': 2.5,
                'image': "https://i.pinimg.com/474x/ac/d8/ce/acd8ceefcf8736fe54ece288d3ebe0c4.jpg"
            },
                
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