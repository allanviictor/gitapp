import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { SearchGit } from '../service/searchgit.service'
import {Injectable} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  value:string = '';

  user:any[] = []

  @Output('retornoUser') retornoUser = new EventEmitter();

  constructor(
    private searchGit: SearchGit
  ) { }

  ngOnInit(): void {
    
  }

  getUser(valueInput){
    this.user = []
    this.searchGit.getUser(valueInput).subscribe(async data => {
      console.log('user',data)
      this.user.push(data)
      this.retornoUser.emit(this.user)
    },error => {
      console.log(error)
      if(error.status == 404){
        this.user = []
        /* alert('nao foi possivel encontrar o usuario') */
        this.retornoUser.emit(this.user)
      }
    },()=> {
      
    })
  }

  getUserRepos(valueInput){
    this.searchGit.getUserRepositories(valueInput).subscribe(data => {
      console.log('user repo',data)
      
    })
  }

  searchUser(){
    this.getUser(this.value)
    
  }

}
