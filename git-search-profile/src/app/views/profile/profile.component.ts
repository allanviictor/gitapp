import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/service/data.service'
import { SearchGit } from '../../shared/service/searchgit.service'
import { UserModel } from '../../shared/service/model/user.model'
import { RepositoriesModel } from '../../shared/service/model/repositories.mode'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private searchGit: SearchGit
  ) { }

  user:any[] = []
  userRepositories:any[] = []


  userInfosTemplate:any;

  userModel: UserModel = new UserModel();
  repositoriesModel: RepositoriesModel[] = []


  ngOnInit(): void {
    this.dataService.data.subscribe(event => {
      this.getUser(event)
    })

    
    
  }
  



  /* returnUserSearch(event){
    console.log('event',event)
    if(event.user.length == 0){
      alert('nao existe usuario')
    }else{
    
      this.userInfosTemplate = event
    }
  } */

  /* getUser(event){
    console.log(event)
    
  } */

  getUser(valueInput){
    this.user = []
    this.searchGit.getUser(valueInput).subscribe((data:any) => {
      console.log('data',data)
      this.userModel.name = data.name
      this.userModel.login = data.login
      this.userModel.photo = data.avatar_url
      this.userModel.location = data.location == (undefined || null) ? '---': data.location
      this.userModel.company = data.company == (undefined || null) ? '---': data.company
      this.userModel.followers = data.followers.toString()
      
    },error => {
      console.log(error)
      if(error.status == 404){
        this.user = []
      }
    },()=> {
      this.getUserRepos(valueInput)
    })
  }


  getUserRepos(valueInput){
    this.userRepositories = []
    this.searchGit.getUserRepositories(valueInput).subscribe((data:any[]) => {
      console.log('data repos',data)
      let lista: RepositoriesModel[] = []
      let listaStars:any[] = []
      data.forEach(item => {
        let repo: RepositoriesModel = new RepositoriesModel()
        repo.repositorieName = item.name
        repo.repositorieDescription = item.description
        repo.repositorieStars = item.stargazers_count.toString()
        listaStars.push(item.stargazers_count)
        lista.push(repo)
      })
      this.repositoriesModel = lista

      const reducer = (previousValue, currentValue) => {return previousValue + currentValue}
      

      this.userModel.repositoriesCount = data.length.toString()
      this.userModel.stars = listaStars.reduce(reducer).toString()
      
    },error => {

    },()=> {
      /* console.log('user',this.userModel)
      console.log('userrepos',this.repositoriesModel) */
      /* console.log('userrepos',this.repositoriesModel) */
    })
  }

 

}
