export interface Book {
    id: number,
    title: string,
    authorid: number,
    publicationDate: string,
    book_cover: string
  }
  
  export interface Author {
    id: number,
    name: string,
    surname: string,
    dateofbirth: string,
    writtenBooks: string
  }

  export interface Person {
    id: number,
    name: string,
    surname: string,
    dateofbirth: string,
  }

  export interface AuthorResponse {
    allAuthors: Author[]
  }
  