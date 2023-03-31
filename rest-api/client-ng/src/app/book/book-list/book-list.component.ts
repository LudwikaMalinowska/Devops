import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, Author } from '../../interfaces/interfaces';
// import { books, authors } from 'src/app/interfaces/data';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';


interface Response {
  allBooks: Book[]
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books: Book[] = [];
  sortForm!: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let sort_type = "";
    
    const req: Observable<Response> = this.http.get<Response>("http://localhost:5000/api/books")
    req.subscribe((val: Response) => {
      console.log(val)
      if (val.allBooks.length > 0) {
        this.books = val.allBooks;
      }
      // else {
      //   this.books = books;
      // }
    });

    this.sortForm = new FormGroup({
      'sort_type': new FormControl(sort_type),
    })
  }

  changeSortType(){
    const sort_type = this.sortForm.value['sort_type'];

    switch(sort_type){
      case "sort_ascending_title":
        this.books.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "sort_descending_title":
        this.books.sort((a, b) => b.title.localeCompare(a.title));
    }
    
  }
}
