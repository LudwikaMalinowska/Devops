import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../interfaces/interfaces';

@Pipe({
  name: 'personFilterPipe'
})
export class PersonFilterPipe implements PipeTransform {

  transform(value: Person[], input: string): any {
    if (input) {
      return value.filter((val: Person) => 
        val.name.toLowerCase().includes(input.toLowerCase()) ||
        val.surname.toLowerCase().includes(input.toLowerCase())
      );
    } else {
      return value;
    }
   
  }

}
