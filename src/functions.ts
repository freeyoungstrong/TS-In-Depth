import { BookProperties, BookOrUndefined, Books } from './types';
import { Book, LibMgrCallback } from './interfaces';
import { Category } from './enums';

export function getAllBooks(): Books {
    const books = <const>[
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            category: Category.JavaScript,
            available: true,
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            category: Category.JavaScript,
            available: false,
        },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', category: Category.CSS, available: true },
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            category: Category.JavaScript,
            available: true,
        },
    ];
    return books;
}

export function logFirstAvailable(books: Books = getAllBooks()): void {
    const numberOfDooks = books.length;
    let title: string = '';

    for (const book of books) {
        if (book.available) {
            title = book.title;
            break;
        }
    }
    console.log('Total number of books: ', numberOfDooks);
    console.log('First available books: ', title);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    const titles: string[] = [];

    for (const book of books) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }

    return titles;
}

export function logBookTitles(titles: string[]): void {
    for (const title of titles) {
        console.log(title);
    }
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index];
    return [title, author];
}

// function calcTotalPages(): bigint {
//     const data = <const>[
//         { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
//         { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
//         { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
//     ];

//     const result = data.reduce((acc: bigint, obj: any) => {
//         return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
//     }, 0n);

//     return result;
// }

export function getBookById(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find((book) => book.id === id);
}

export function createCustomerId(name: string, id: number): string {
    return `${id} - ${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log('Customer name: ', name);

    if (age) {
        console.log('Customer age: ', age);
    }

    if (city) {
        console.log('Customer city: ', city);
    }
}

export function checkoutBooks(customer: string, ...bookIds: number[]) {
    console.log('Customer name: ', customer);

    const titles: string[] = [];

    for (const id of bookIds) {
        const book = getBookById(id);
        if (book && book.available) {
            titles.push(book.title);
        }
    }

    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter((book) => book.author === arg).map((book) => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter((book) => book.available === arg).map((book) => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter((book) => book.id === id && book.available === available).map((book) => book.title);
        }
    }
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        return book[prop][name];
    }
    return book[prop];
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles: string[] = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (error) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log('Error message: ', err.message);
    } else {
        console.log('Titles: ', titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles: string[] = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category) {
    const titles = await getBooksByCategoryPromise(category);
    console.log('Titles: ', titles);
}
