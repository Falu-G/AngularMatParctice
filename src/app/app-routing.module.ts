import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { CreateQrComponent } from '../app/create-qr/create-qr.component';
import { HistoryComponent } from '../app/history/history.component'

const routes: Routes = [
  { path: 'create', component: CreateQrComponent },
  { path: 'history', component: HistoryComponent },
  {path:"", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
