import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Person } from 'src/app/interfaces/interfaces';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent {
  id: number = 0;
  editMode = false;
  personForm!: FormGroup;

  constructor(private route: ActivatedRoute,
    private personService: PersonService,
    private router: Router) { 
      this.initForm();
    }
  
    ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      });
    }
  
  private async initForm() {
    let personName = "";
    let personSurname = "";
    let personDate = "1990-02-02";

    if(!this.editMode){
      this.personForm = new FormGroup({
        'name': new FormControl(personName, Validators.required),
        'surname': new FormControl(personSurname, Validators.required),
        'dateofbirth': new FormControl(personDate.slice(0,10), Validators.required),
      })

      return;
    }

    let person: Person;
    const req = this.personService.getPerson(this.id);
    await req.subscribe((data: Person) => {
      person = data;

      console.log("personn", person);
    
      personName = person.name;
      personSurname = person.surname;
      personDate = person.dateofbirth;

      this.personForm = new FormGroup({
        'name': new FormControl(personName, Validators.required),
        'surname': new FormControl(personSurname, Validators.required),
        'dateofbirth': new FormControl(personDate.slice(0,10), Validators.required),
      })
    })

  }

  onSubmit(){
    if (this.editMode) {
      this.personService.updatePerson(this.id, this.personForm.value);
    } else {
      this.personService.addPerson(this.personForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(["../"], {relativeTo: this.route});
  }

}
