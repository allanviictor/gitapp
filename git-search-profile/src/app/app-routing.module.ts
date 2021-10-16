import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component'
import { ProfileComponent } from './views/profile/profile.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'profile', component: ProfileComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
