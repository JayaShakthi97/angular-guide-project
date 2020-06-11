import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuestionsComponent} from "./components/questions/questions.component";
import {HomeComponent} from "./components/home/home.component";


const routes: Routes = [
  {path: 'questions', component: QuestionsComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
