import { Author, Book } from "./interfaces";

export const books: Book[] = [
    {id: 1, title: "Book1", authorid: 1, publicationdate: "01-01-2021", book_cover: "https://static01.helion.com.pl/global/okladki/326x466/czykvv.png"},
    {id: 2, title: "Book2", authorid: 1, publicationdate: "01-01-2021", book_cover: "https://static01.helion.com.pl/global/okladki/326x466/czykvv.png"},
    {id: 3, title: "Book3", authorid: 2, publicationdate: "01-01-2021", book_cover: "https://static01.helion.com.pl/global/okladki/326x466/czykvv.png"},
    {id: 4, title: "Book4", authorid: 2, publicationdate: "01-01-2021", book_cover: "https://static01.helion.com.pl/global/okladki/326x466/czykvv.png"},
];

export const authors: Author[] = [
    {id: 1, name: "Jane", surname: "Doe", dateOfBirth: "01-01-1990", writtenBooks: "1,2,3,4"},
    {id: 2, name: "John", surname: "Doe", dateOfBirth: "01-01-1990", writtenBooks: "1,2,3,4"}
];