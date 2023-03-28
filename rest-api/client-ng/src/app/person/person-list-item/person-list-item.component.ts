import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Person } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-person-list-item',
  templateUrl: './person-list-item.component.html',
  styleUrls: ['./person-list-item.component.scss']
})
export class PersonListItemComponent {
  @Input() person: Person | undefined;

  constructor(private http: HttpClient) {}
}
