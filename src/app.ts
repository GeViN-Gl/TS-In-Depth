import { ReferenceItem, UL, Shelf } from './classes/';
import { Category } from './enums';
import {
    printRefBook,
    getAllBooks,
    logFirstAvaible,
    getBookTitlesByCategory,
    logBookTitles,
    getBookAuthorByIndex,
    purge,
    getObjectPropery,
    createCustomer,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
} from './functions';
import { Book, Librarian, Magazine } from './interfaces';
import RefBook from './classes/encyclopedia';
import { Library } from './classes/library';
import { BookRequiredFields, UpdatedBook, CreateCustomerFunctionType } from './types';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ----------------------------------------------------------------

// // // //

// calcTotalPages();
// Task 02.01
// console.log(getAllBooks());
// logFirstAvaible(getAllBooks());
// console.log(getBookTitlesByCategory(Category.CSS));
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(0));

/*
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
// const mybook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3,
//     pages: 200,
//     // // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
//     markDamaged(reason: string) {
//         console.log(`Damaged: ${reason}`);
//     },
// };

// printBook(mybook);
// mybook.markDamaged('missing back cover');

// Task 04.02
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

/*
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
// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printitem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getId());

// Task 05.02 05.03
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printitem();
// console.log(refBook);
// refBook.printCitation();

// Task 05.04

// const favoriteLibrarian: Librarian /* & A */ = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// favoriteLibrarian.a = 2;

// Task 05.05
// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     id: 1,
//     title: 'Unknown',
// };

// const options:TOptions = {duration: 20};
// const options2 = setDefaultConfig(options);
// console.log('🚀 ~ options', options);
// console.log('🚀 ~ options2', options2);

// Task 06.03, 06.04
// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);
// console.log('🚀 ~ refBook', refBook);
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// Task 06.05
// const flag = true;
// if (flag) {
//     import('./classes')
//         .then(obj => {
//             const reader = new obj.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks[0]);

//             console.log('🚀 ~ reader', reader);
//         })
//         .catch(err => console.error(err))
//         .finally(() => console.log('Completed'));
// }
// const flag = true;
// if (flag) {
//     const obj = await import('./classes');

//     const reader = new obj.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks[0]);
//     console.log('🚀 ~ reader', reader);
// }

// Task 06.06
// let library: Library = new Library();
// let library: Library = {
//     id: 1,
//     adress: '',
//     name: 'Anna',
// };
// console.log('🚀 ~ library', library);

// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];
// const result1 = purge(inventory);
// console.log('🚀 ~ result', result1);
// const result2 = purge([1, 2, 3]);
// console.log('🚀 ~ result2', result2);

// Task 07.02, 07.03
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log('🚀 ~ bookShelf', bookShelf);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
// console.log(getObjectPropery(magazines[0], 'title'));
// console.log(getObjectPropery<Book, 'author'|'title>(inventory[1], 'author'));

// Task 07.04
// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn Angular',
// };
// const updatedBook: UpdatedBook = {
//     id: 1,
//     pages: 300,
// };
// let params: Parameters<CreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);

// Task 08.01 08.02
// const favoriteLibrarian1 = new UL.UniversityLibrarian();
// const favoriteLibrarian2 = new UL.UniversityLibrarian();
// favoriteLibrarian1['a'] = 1;
// UL.UniversityLibrarian['a'] = 2;
// UL.UniversityLibrarian.prototype['a'] = 3;

// console.log(favoriteLibrarian1);
// favoriteLibrarian1.

// ------------------------------------ //
// Task 09.01

// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(n => console.log(n))
//     .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');

// Task 09.03
console.log('Begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software);
console.log('End');
