import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
// import { books } from 'src/app/interfaces/data';
import { Book, Author } from 'src/app/interfaces/interfaces';

interface BookResponse {
  allBooks: Book[]
}

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.scss']
})
export class AuthorPageComponent {
  books: Book[] | undefined;
  authorBooks: Book[] | undefined;
  author: Author | undefined;
  state: any;

  constructor(private http: HttpClient, private router:Router, private activatedRoute:ActivatedRoute) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    let authorId = 0;
    this.activatedRoute.params.subscribe(params => {
      authorId = params['id'];
    })
    const req2: Observable<BookResponse> = this.http.get<BookResponse>("http://localhost:5000/api/books")
    req2.subscribe((val: BookResponse) => {
      console.log(val)
      if (val.allBooks.length > 0) {
        this.books = val.allBooks;
      }

      if (this.state && this.state.author){
        this.author = this.state.author;
        this.authorBooks = this.parseWrittenBooks(this.state.author.writtenBooks)
        return;
      }

      const req: Observable<Author> = this.http.get<Author>("http://localhost:5000/api/authors/" + authorId)

      req.subscribe((val: Author) => {
        this.author = val;
        this.authorBooks = this.parseWrittenBooks(val.writtenBooks)
      });
    });



  }

  parseWrittenBooks(writtenBooks: String) {
    // const ids = writtenBooks.split(",").map(id => Number(id))
    const authorBooks = this.books?.filter(book => book.authorid === this.author?.id);
    console.log(authorBooks);
    return authorBooks;
  }

  parseDate(date: String | undefined) {
    return date?.slice(0, 10);
  }
}
