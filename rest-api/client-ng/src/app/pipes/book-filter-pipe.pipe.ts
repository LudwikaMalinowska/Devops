import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../interfaces/interfaces';

@Pipe({
  name: 'bookFilterPipe'
})
export class BookFilterPipe implements PipeTransform {

  // value - array of cities
// input - user input in search box
// when there is an input, filter & return all matches
// when there is no input, display all data
// filter() is a javascript method that returns a new array of all values that pass a test defined in the method. You can read more here
transform(value: any, input: any): any {
  if (input) {
     return value.filter((val: Book) => val.title.toLowerCase().includes(input.toLowerCase()));
   } else {
     return value;
   }
  }

}
