import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchGit {

  constructor(
    private http: HttpClient
  ) { }

  getUser(value){
    return this.http.get(`https://api.github.com/users/${value}`)
  }

  getUserRepositories(value){
    return this.http.get(`https://api.github.com/users/${value}/repos`) 
  }
}
