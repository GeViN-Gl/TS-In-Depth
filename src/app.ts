/* eslint-disable no-underscore-dangle */
/* eslint-disable no-redeclare */
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ----------------------------------------------------------------
enum Category {
    JavaScript,
    CSS,
    HTML,
    TypeScript,
    Angular,
}
/*
// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };
*/

type BookProperties = keyof Book; // | 'isbn';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void;
    // markDamaged?(reason: string): void;
    markDamaged?: DamageLogger;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface DamageLogger {
    (reason: string): void;
}

function getAllBooks(): readonly Book[] {
    const books = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            category: Category.JavaScript,
            author: 'Evan Burchard',
            available: true,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            category: Category.JavaScript,
            author: 'Liang Yuxian Eugene',
            available: false,
        },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            category: Category.JavaScript,
            author: 'Andrea Chiarelli',
            available: true,
        },
    ];
    return books;
}

function logFirstAvaible(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);
    const title = books.find(book => book?.available)?.title;
    console.log(title);
}

function getBookTitlesByCategory(inputCategory: Category = Category.JavaScript): string[] {
    return getAllBooks()
        .filter(({ category }) => category === inputCategory)
        .map(({ title }) => title);
}

function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const { title, author } = getAllBooks()[index];
    return [title, author];
}

function calcTotalPages(): void {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    const totalPages = data.reduce(
        (acc: bigint, { books, avgPagesPerBook }) => acc + BigInt(books) * BigInt(avgPagesPerBook),
        0n,
    );
    console.log(totalPages);
}

function createCustomerID(name: string, id: number): string {
    return `${id}/${name}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name:${name}`);
    if (age) {
        console.log(`Customer age: ${age}`);
    }
    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

function getBookByID(id: Book['id']): Book | undefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer name: ${customer}`);
    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }

    return [];
}

function assertStringValue(data: any): asserts data is string {
    if (typeof data !== 'string') {
        throw new Error('value should have been a string');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

function printBook(book: Book): void {
    console.log(` ${book.title} by ${book.author}`);
}

function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];

    return typeof value === 'function' ? value.name : value;
}

// // // //

class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Creating a new ReferenceItem...');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }
    #id: number;

    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    static department: string = 'Research Dep.';

    constructor(id: number, public title: string, private year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    printitem(): void {
        console.log(` ${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
        console.log(Object.getPrototypeOf(this).constructor.department);
    }

    getId(): number {
        return this.#id;
    }
}
/*
// calcTotalPages();
// Task 02.01
// console.log(getAllBooks());
// logFirstAvaible(getAllBooks());
// console.log(getBookTitlesByCategory(Category.CSS));
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));

// Task 03.01
// const myId: string = createCustomerID('Ann', 10);
// console.log(myId);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('boris',20));
*/

/*
// Task 03.02
// createCustomer('Anna');
// createCustomer('Anna', 10);
// createCustomer('Anna', 12, 'Kyiv');

// console.log(getBookTitlesByCategory());
// console.log(getBookTitlesByCategory(Category.CSS));
// logFirstAvaible();

// console.log(getBookByID(1));
// checkoutBooks('Ann', 1, 2, 4);
// checkoutBooks('Ann');
*/

/*
// Task 03.03
// getTitles(1, true);

// console.log(getTitles(1, true));
// console.log(getTitles(true));
// console.log(getTitles(false));
// console.log(getTitles('Lea Verou'));

// console.log(bookTitleTransform('Learn TypeScript'));
// console.log(bookTitleTransform(123));
*/

// Task 04.01
const mybook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    // copies: 3,
    pages: 200,
    // // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
    markDamaged(reason: string) {
        console.log(`Damaged: ${reason}`);
    },
};

// printBook(mybook);
// mybook.markDamaged('missing back cover');

/*

// Task 04.02
// const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// // Task 04.03
// const favorieAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@gmail.com',
//     numBooksPublished: 2,
// };

// const favorieLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@gmail.com',
//     department: 'classical literature',
//     assistCustomer: null,
// };
*/

/*
// Task 04.04

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[10]);
*/

// Task 04.05

// console.log(getProperty(mybook, 'title'));
// console.log(getProperty(mybook, 'markDamaged'));
// console.log(getProperty(mybook, 'isbn'));

// Task 05.01
const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
console.log(ref);
ref.printitem();
ref.publisher = 'abc group';
console.log(ref.publisher);
console.log(ref.getId());
