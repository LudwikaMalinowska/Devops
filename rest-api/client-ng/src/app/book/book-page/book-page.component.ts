import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, Author, Person } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent {
  book: Book | undefined;
  author: Person | undefined;
  state: any;

  constructor(
    private http: HttpClient, 
    private router:Router, 
    private activatedRoute:ActivatedRoute,
    private bookService: BookService
  ) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    let bookId = 0;
    this.activatedRoute.params.subscribe(params => {
      bookId = params['id'];
    })
    if (this.state && this.state.author && this.state.book){
      this.author = this.state.author;
      this.book = this.state.book;
      return;
    }

    const req: Observable<Book> = this.http.get<Book>("http://localhost:5000/api/books/" + bookId )
    req.subscribe((val: Book) => {
      this.book = val;
      const req2: Observable<Person> = this.http
        .get<Person>("http://localhost:5000/api/people/" + this.book?.authorid);
      req2.subscribe((val:Person) => {
        console.log("got person: ", val);
        this.author = val;
      })
    });
  }

  deleteBook() {
    console.log(this.book)
    if (this.book?.id) {
      this.bookService.deleteBook(this.book?.id);
      this.router.navigate(['/books']);
    }
      

  }
}
