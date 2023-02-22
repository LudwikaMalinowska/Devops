import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, Author } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';

interface Response {
  allAuthors: Author[]
}

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent {
  authors: Author[] = []


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const req: Observable<Response> = this.http.get<Response>("http://localhost:5000/api/authors")
    req.subscribe((val: Response) => {
      if (val.allAuthors.length > 0) {
        this.authors = val.allAuthors;
      }
    })
    
  }
}
