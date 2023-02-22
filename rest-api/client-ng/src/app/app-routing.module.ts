import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookPageComponent } from './book/book-page/book-page.component';

const routes: Routes = [
  { path: 'books', component:BookListComponent},
  { path: 'books/:id', component: BookPageComponent},
  { path: 'authors', component:AuthorListComponent },
  { path:'home', component:AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
