import { Component, Input } from '@angular/core';
import { Book, Author, AuthorResponse } from '../../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-author-list-item',
  templateUrl: './author-list-item.component.html',
  styleUrls: ['./author-list-item.component.scss']
})
export class AuthorListItemComponent {
  @Input() author: Author | undefined;

  constructor(private http: HttpClient) {}
}
