import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  visiblePeople: Person[] = [];
  sortForm!: FormGroup;
  search_text: string = "";


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let sort_type = "";
    // let search_text = "";

    const req: Observable<Response> = this.http.get<Response>("http://localhost:5000/api/people")
    req.subscribe((val: Response) => {
      console.log(val.allPeople);
      if (val.allPeople.length > 0) {
        this.people = val.allPeople;
        this.visiblePeople = val.allPeople;
      }
    })

    this.sortForm = new FormGroup({
      'sort_type': new FormControl(sort_type),
      // 'search': new FormControl(search_text),
    })
    
  }

  changeSortType(){
    const sort_type = this.sortForm.value['sort_type'];

    switch(sort_type){
      case "sort_ascending_name":
        this.people.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "sort_descending_name":
        this.people.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "sort_ascending_surname":
        this.people.sort((a, b) => a.surname.localeCompare(b.surname));
        break;
      case "sort_descending_surname":
        this.people.sort((a, b) => b.surname.localeCompare(a.surname));
        break;
    }
    
  }
  
}


