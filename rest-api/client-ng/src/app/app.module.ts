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
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookPageComponent,
    AuthorListComponent,
    AuthorListItemComponent,
    AuthorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
