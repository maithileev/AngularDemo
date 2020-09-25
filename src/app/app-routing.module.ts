import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostlistComponent } from './postlist/postlist.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'posts', component: PostlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
