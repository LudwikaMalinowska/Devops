import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/interfaces';

interface BookResponse {
  allBooks: Book[]
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBook(bookId: number): Observable<Book>{
    // const mockBook = {
    //   id: -1,
    //   name: "mm",
    //   surname: "mock",
    //   dateofbirth: "1990-01-01"
    // }

    let response: Book;
    const req: Observable<Book> = this.http.get<Book>("http://localhost:5000/api/books/"+bookId)

    // req.subscribe((val: Book) => response = {
    //   id: val.id,
    //   name: val.name,
    //   surname: val.surname,
    //   dateofbirth: val.dateofbirth
    // })

    return req;
  }

  private books: Book[] = [];

  getBooks() {
      const req: Observable<BookResponse> = this.http.get<BookResponse>("http://localhost:5000/api/books")

      req.subscribe((val: BookResponse) => {
        console.log(val)
        return val.allBooks;
      })
  }


  addBook(book: Book) {
    console.log("book -service", book)
    const req: Observable<BookResponse> = this.http.post<BookResponse>("http://localhost:5000/api/books", book)

    req.subscribe((val) => {
      console.log(val)
      return val;
    })
  }

  updateBook(index: number, newBook: Book) {
    const req: Observable<BookResponse> = this.http.put<BookResponse>("http://localhost:5000/api/books/"+index, newBook)

    req.subscribe((val) => {
      console.log(val)
      return val;
    })
  }

  deleteBook(index: number){
    const req: Observable<BookResponse> = this.http.delete<BookResponse>("http://localhost:5000/api/books/"+index)

    req.subscribe((val) => {
      console.log(val)
      return val;
    })
  }
}
