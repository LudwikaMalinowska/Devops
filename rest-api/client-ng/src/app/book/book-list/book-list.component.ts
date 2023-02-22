import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, Author } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';

interface Response {
  allBooks: Book[]
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  books: Book[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const req: Observable<Response> = this.http.get<Response>("http://localhost:5000/api/books")
    req.subscribe((val: Response) => {
      console.log(val.allBooks)
      if (val.allBooks.length > 0) {
        this.books = val.allBooks;
      }
      
    });
  }
}
