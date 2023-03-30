import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/interfaces';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
  id: number = 0;
  editMode = false;
  bookForm!: FormGroup;

  constructor(private route: ActivatedRoute,
    private bookService: BookService,
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
    let bookTitle = "";
    let bookAuthorId = -1;
    let bookDate = "2022-02-02";
    let bookCover = "";

    if(!this.editMode){
      this.bookForm = new FormGroup({
        'title': new FormControl(bookTitle, Validators.required),
        'authorId': new FormControl(bookAuthorId, Validators.required),
        'publicationdate': new FormControl(bookDate.slice(0,10), Validators.required),
        'book_cover': new FormControl(bookCover),
      })

      return;
    }

    let book: Book;
    const req = this.bookService.getBook(this.id);
    await req.subscribe((data: Book) => {
      book = data;

      console.log("booknnnn", book);
    
      bookTitle = book.title;
      bookAuthorId = book.authorid;
      bookDate = book.publicationdate;
      bookCover = book.book_cover;

      this.bookForm = new FormGroup({
        'title': new FormControl(bookTitle, Validators.required),
        'authorId': new FormControl(bookAuthorId, Validators.required),
        'publicationdate': new FormControl(bookDate.slice(0,10), Validators.required),
        'book_cover': new FormControl(bookCover),
      })
    })

  }

  onSubmit(){
    if (this.editMode) {
      this.bookService.updateBook(this.id, this.bookForm.value);
    } else {
      this.bookService.addBook(this.bookForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(["../"], {relativeTo: this.route});
  }
}
