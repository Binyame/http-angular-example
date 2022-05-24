import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './httpapi/author/author.component';
import { BookComponent } from './httpapi/book/book.component';
import { ReviewComponent } from './httpapi/review/review.component';

const routes: Routes = [
  {path:'', redirectTo:'book',pathMatch:'full'},
  {path:'books', component:BookComponent},
  {path:'authors', component:AuthorComponent},
  {path:'reviews', component:ReviewComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
