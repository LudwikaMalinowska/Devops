import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { AuthorPageComponent } from './author/author-page/author-page.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookPageComponent } from './book/book-page/book-page.component';
import { PersonFormComponent } from './person/person-form/person-form.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonPageComponent } from './person/person-page/person-page.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent},
  { path: 'books/add', component: BookFormComponent},
  { path: 'books/:id', component: BookPageComponent},
  { path: 'books/:id/edit', component: BookFormComponent},

  { path: 'authors', component: AuthorListComponent },
  { path: 'authors/:id', component: AuthorPageComponent},
  
  { path: 'people', component: PersonListComponent },
  { path: 'people/add', component: PersonFormComponent},
  { path: 'people/:id', component: PersonPageComponent},
  { path: 'people/:id/edit', component: PersonFormComponent},

  { path:'home', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
