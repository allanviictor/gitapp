import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { SearchGit } from '../service/searchgit.service'
import {Injectable} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  value:string = '';

  user:any[] = []
  userRepositories:any;

  

  /* @Output('retornoUser') retornoUser = new EventEmitter(); */

  constructor(
    private searchGit: SearchGit,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {

    this.dataService.data.subscribe()
    /* this.dataService.data.next() */


  }


  searchUser(){
    this.dataService.data.next(this.value)

    this.router.navigate([`profile/${this.value}`])
  }



























  /* getUser(valueInput){
    this.user = []
    this.searchGit.getUser(valueInput).subscribe(data => {

      if(this.router.url != '/home'){
        this.getUser(this.route.snapshot.params.name)
        this.user.push(data)
  
        this.getUserRepos(valueInput)
        console.log('this.user',this.user)
        console.log('this.userRepositories',this.userRepositories)
        this.retornoUser.emit({user:this.user, userRepos: this.userRepositories})
      } else {
        this.router.navigate([`profile/${valueInput}`],{ fragment: valueInput })
      }

     

    },error => {
      console.log(error)
      if(error.status == 404){
        this.user = []
        this.retornoUser.emit(this.user)
      }
    },()=> {
      
    })
  }

  getUserRepos(valueInput){
    this.userRepositories = []
    this.searchGit.getUserRepositories(valueInput).subscribe(data => {
      let lista: any[]= []
      lista.push(data) 
      this.userRepositories = lista
      console.log('data',data)
      
    })
  }


  searchUser(){
    this.getUser(this.value)
     
  } */
  

}
