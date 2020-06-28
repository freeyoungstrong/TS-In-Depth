import { Category } from './enums';
import { ReferenceItem, RefBook, Shelf, UniversityLibrarian } from './classes';
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';
import {
    purge,
    printBook,
    createCustomer,
    logFirstAvailable,
    getBooksByCategory,
    logCategorySearch,
    logSearchResults,
} from './functions';
import { Book, Magazine } from './interfaces';
import { getBooksByCategoryPromise } from './functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ======================================================================
// Task 02.01. Basic Types
// logFirstAvailable(getAllBooks());
// const result = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(result);
// console.log(getBookAuthorByIndex(2));
// console.log(calcTotalPages());

// Task 03.01. Arrow Functions
// const result = getBookTitlesByCategory(Category.JavaScript);
// result.forEach((title) => console.log(title));
// console.log(getBookById(2));

// Task 03.02. Function Type
// const myID: string = createCustomerId('Ann', 10);
// console.log(myID);
// const idGenerator = (name: string, id: number) => `${id} - ${name}`;

// Task 03.03. Optional, Default and Rest Parameters
// createCustomer('Anna');
// createCustomer('Boris', 20);
// createCustomer('Clara', 70, 'Kyiv');

// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// const myBooks = checkoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 03.04. Function Overloading
// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// Task 03.05. Assertion Functions
// const str = bookTitleTransform('Some string');
// console.log(str);
// const num = bookTitleTransform(10);
// console.log(num);

// Task 04.01. Defining an Interface
// const myBook = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     year: 2015,
//     copies: 3,
//     markDamaged: (reason: string) => console.log('Damage reason: ', reason),
// };
// printBook(myBook);
// myBook.markDamaged('some reason');

// Task 04.02. Defining an Interface for Function Types
// const logDamage: Logger = (reason: string) => console.log('Damage reason: ', reason);
// logDamage('some reason');

// Task 04.03. Extending Interface
// const favoriteAuthor: Author = {
//     name: 'Ivan',
//     email: 'email@email.com',
//     numBooksPublished: 2,
// };
// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'email@email.com',
//     department: 'Security',
//     assisCustomer: null,
// };

// Task 04.04. Optional Chaining
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
//     arr: [{ title: 'Title1' }],
// };
// console.log(offer.magazine?.title);
// console.log(offer.title?.getTitle?.());
// console.log(offer.arr[0].title);
// console.log(offer.arr2?.[4]?.title);

// Task 04.05. Keyof Operator
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
// console.log(getBookProp(getAllBooks()[0], 'isbn'));

// Task 05.01. Creating and Using Classes
// const ref: ReferenceItem = new ReferenceItem('Cool title', 2020);
// ref.printItem();
// console.log(ref);
// ref.publisher = 'Something';
// console.log(ref.publisher);

// Task 05.02. Extending Classes
// const refBook: RefBook= new RefBook('Cool title', 2020, 1);
// refBook.printItem();
// console.log(refBook);

// Task 05.03. Creating Abstract Classes
// const refBook: RefBook = new RefBook('Cool title', 2020, 1);
// refBook.printCitation();

// Task 05.04. Interfaces for Class Types
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistCustomer('Doris');

// Task 05.05. Intersection and Union Types
// const personBook: PersonBook = {
//     author: 'Anna',
//     available: true,
//     category: Category.HTML,
//     email: 'email',
//     id: 1,
//     name: 'Anna',
//     title: 'super title',
// };

// Task 06.05. Dynamic Import Expression
// const flag: boolean = true;
// if (flag) {
//     import('./classes').then((module) => {
//         const reader = new module.Reader();
//         reader.name = 'Anna';
//         console.log(reader);
//     });
// }

// Task 07.01. Generic Functions
// const inventory: Array<Book> = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];

// let result: Book[] | number[] = purge(inventory);
// console.log(result);
// result = purge([1, 2, 3, 4]);
// console.log(result);

// Task 07.02. Generic Interfaces and Classes
// const inventory: Array<Book> = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
// ];
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach((book) => bookShelf.add(book));
// console.log(bookShelf.getFirst());

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];
// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach((magazine) => magazineShelf.add(magazine));
// console.log(magazineShelf.getFirst());

// Task 07.03. Generic Constraints
// magazineShelf.printTitles();
// const mag = magazineShelf.find('Five Points');
// console.log(mag);

// Task 07.04. Utility Types
// const book: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     available: true,
//     category: Category.Angular,
//     markDamaged: null,
//     pages: 200,
//     title: 'Super title',
// };

// const updatedBook: UpdatedBook = {
//     id: 2,
// };

// const params: Parameters<СreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

// Task 08.01. Class Decorators (sealed)
// const librarian = new UniversityLibrarian();
// console.log(librarian);

// Task 08.02. Class Decorators that replace constructor functions (logger)
// const librarian = new UniversityLibrarian();
// librarian.name = 'Anna';
// console.log(librarian);
// librarian['printLibrarian']();

// Task 08.03. Method Decorator (writable)
// const librarian = new UniversityLibrarian();
// librarian.assistCustomer = null;
// librarian.assistFaculty = null;

// Task 08.04. Method Decorator (timeout)
// const enc = new RefBook('My title', 2020, 3);
// enc.printItem();

// Task 08.05. Parameter Decorator (logParameter)
// const librarian = new UniversityLibrarian();
// librarian.name = 'Anna';
// librarian.assistCustomer('Boris');

// Task 08.06. Property Decorator
// const librarian = new UniversityLibrarian();
// librarian.name = 'Anna';
// librarian.assistCustomer('Boris');

// Task 08.07. Accessor Decorator
// const enc = new RefBook('My title', 2020, 3);
// enc.copies = -10;

// Task 09.01. Callback Functions
// console.log('Start');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02. Promises
// console.log('Start');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then((titles) => console.log('Titles: ', titles))
//     .catch((error) => console.log('Rejected because of this error: ', error))
//     .finally(() => console.log('Completed!'));

// getBooksByCategoryPromise(Category.Software)
//     .then((titles) => {
//         console.log('Titles: ', titles);
//         return titles.length;
//     })
//     .then((numOfBooks) => console.log('Number of books: ', numOfBooks))
//     .catch((error) => console.log('Rejected because of error: ', error))
//     .finally(() => console.log('Completed!'));

// console.log('End');

// Task 09.03. Async Functions
console.log('Start');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software).catch((err) => console.log(err));
console.log('End');
