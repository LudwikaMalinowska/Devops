import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { AuthorPageComponent } from './author/author-page/author-page.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookPageComponent } from './book/book-page/book-page.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonPageComponent } from './person/person-page/person-page.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent},
  { path: 'books/:id', component: BookPageComponent},
  { path: 'authors', component: AuthorListComponent },
  { path: 'authors/:id', component: AuthorPageComponent},
  { path: 'people', component: PersonListComponent },
  { path: 'people/:id', component: PersonPageComponent},
  { path:'home', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
