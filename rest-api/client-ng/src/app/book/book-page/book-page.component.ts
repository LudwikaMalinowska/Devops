import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, Author } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent {
  book: Book | undefined;
  author: Author | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const req: Observable<Book> = this.http.get<Book>("http://localhost:5000/api/books/3")
    req.subscribe((val: Book) => {
      this.book = val;
      const req2: Observable<Author> = this.http
        .get<Author>("http://localhost:5000/api/authors/" + this.book?.authorid);
      req2.subscribe((val:Author) => {
        this.author = val;
      })
    });
  }
}
