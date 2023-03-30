import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookListItemComponent } from './book/book-list-item/book-list-item.component';
import { BookPageComponent } from './book/book-page/book-page.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { AuthorListItemComponent } from './author/author-list-item/author-list-item.component';
import { AuthorPageComponent } from './author/author-page/author-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonListItemComponent } from './person/person-list-item/person-list-item.component';
import { PersonPageComponent } from './person/person-page/person-page.component';
import { PersonFormComponent } from './person/person-form/person-form.component';
import { BookFormComponent } from './book/book-form/book-form.component';
// import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookPageComponent,
    AuthorListComponent,
    AuthorListItemComponent,
    AuthorPageComponent,
    PersonListComponent,
    PersonListItemComponent,
    PersonPageComponent,
    PersonFormComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
