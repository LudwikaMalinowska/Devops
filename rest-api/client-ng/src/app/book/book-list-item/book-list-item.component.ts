import { Component, Input } from '@angular/core';
import { Book, Author, AuthorResponse } from '../../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent {
  @Input() book: Book | undefined;

  authors: Author[] = []

  author: Author | undefined = undefined;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  goToDetails() {
    this.router.navigate(["/books", this.book?.id])
  }

  ngOnInit(): void {
    const req: Observable<AuthorResponse> = this.http
        .get<AuthorResponse>("http://localhost:5000/api/authors")
    req.subscribe((val: AuthorResponse) => {

      if (val.allAuthors.length > 0) {
        this.authors = val.allAuthors;
        this.author = this.authors.find(author => author.id == this.book?.authorid);
      }
    })
    
  }
}
