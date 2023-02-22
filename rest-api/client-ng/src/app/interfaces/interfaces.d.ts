export interface Book {
    id: number,
    title: string,
    authorid: number,
    publicationdate: string
  }
  
  export interface Author {
    id: number,
    name: String,
    surname: String,
    dateOfBirth: String,
    writtenBooks: String
  }

  export interface AuthorResponse {
    allAuthors: Author[]
  }
  