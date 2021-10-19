import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SearchComponent } from './shared/search/search.component';
import { SearchGit } from './shared/service/searchgit.service'
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './views/profile/profile.component';
import { ProfileDetailsComponent } from './shared/profile-details/profile-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ProfileComponent,
    ProfileDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ SearchGit ],
  bootstrap: [AppComponent]
})
export class AppModule { }
