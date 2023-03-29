import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../interfaces/interfaces';

interface PersonResponse {
  allPeople: Person[]
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http: HttpClient) {}

  getPerson(personId: number): Person{
    const mockPerson = {
      id: 0,
      name: "",
      surname: "",
      dateofbirth: "01-01-1970"
    }

    return mockPerson;
  }

  private persons: Person[] = [];

  getPeople() {
      const req: Observable<PersonResponse> = this.http.get<PersonResponse>("http://localhost:5000/api/people")

      req.subscribe((val: PersonResponse) => {
        console.log(val)
        return val.allPeople;
      })
  }


  addPerson(person: Person) {
    console.log("person", person)
    const req: Observable<PersonResponse> = this.http.post<PersonResponse>("http://localhost:5000/api/people", person)

    req.subscribe((val) => {
      console.log(val)
      return val;
    })
  }

  updatePerson(index: number, newPerson: Person) {
    const req: Observable<PersonResponse> = this.http.put<PersonResponse>("http://localhost:5000/api/people/"+index, newPerson)

    req.subscribe((val) => {
      console.log(val)
      return val;
    })
  }

  deletePerson(index: number){
    const req: Observable<PersonResponse> = this.http.delete<PersonResponse>("http://localhost:5000/api/people/"+index)

    req.subscribe((val) => {
      console.log(val)
      return val;
    })
  }
}
