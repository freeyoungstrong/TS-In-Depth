import { Book, Person, Author } from './interfaces';

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     category: Category;
//     available: boolean;
// };

type Books = ReadonlyArray<Book>;

type BookProperties = keyof Book;

type PersonBook = Person & Book;

type BookOrUndefined = Book | undefined;

type BookRequiredFields = Required<Book>;

type UpdatedBook = Partial<Book>;

type AuthorWoEmail = Omit<Author, 'email'>;

type СreateCustomerFunctionType = (name: string, age?: number, city?: string) => void;

export {
    Books,
    BookOrUndefined,
    BookProperties,
    PersonBook,
    BookRequiredFields,
    UpdatedBook,
    AuthorWoEmail,
    СreateCustomerFunctionType,
};
