import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/interfaces/interfaces';

interface Response {
  allPeople: Person[]
}

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
  people: Person[] = []
  // authors: Author[] = authors;


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const req: Observable<Response> = this.http.get<Response>("http://localhost:5000/api/people")
    req.subscribe((val: Response) => {
      console.log(val.allPeople);
      if (val.allPeople.length > 0) {
        this.people = val.allPeople;
      }
    })
    
  }
}


