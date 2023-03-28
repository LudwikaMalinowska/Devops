import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Person } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss']
})
export class PersonPageComponent {
  person: Person | undefined;
  state: any;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
    this.state = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    let personId = 0;
    this.activatedRoute.params.subscribe(params => {
      personId = params['id'];
    })

    if (this.state && this.state.person){
      this.person = this.state.person;
      return;
    }

    const req: Observable<Person> = this.http.get<Person>("http://localhost:5000/api/people/" + personId)

    req.subscribe((val: Person) => {
      this.person = val;
    });
  }

  parseDate(date: String | undefined) {
    return date?.slice(0, 10);
  }
}
