import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../shared/service/data.service'
import { SearchGit } from '../../shared/service/searchgit.service'
import { UserModel } from '../../shared/service/model/user.model'
import { RepositoriesModel } from '../../shared/service/model/repositories.mode'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy  {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private searchGit: SearchGit,
    private router: Router,
  ) { }



  user:any[] = []
  userRepositories:any[] = []

  userInfosTemplate:any;

  userModel: UserModel = new UserModel();
  repositoriesModel: RepositoriesModel[] = []


  userNotFound: boolean = false

  image:String = '../../../assets/user-default-icon.png'
  


  ngOnInit(): void {
   
    this.getUser(this.route.snapshot.params.name)
    this.dataService.data.subscribe(name => {
      this.getUser(name)
      
    })
  
    
  }
  
  getUser(valueInput){
    this.user = []
    this.searchGit.getUser(valueInput).subscribe((data:any) => {
      console.log('data',data)
      this.userNotFound = false

      this.userModel.name = data.name
      this.userModel.login = data.login
      this.image = data.avatar_url
      this.userModel.location = data.location == (undefined || null) ? '---': data.location
      this.userModel.company = data.company == (undefined || null) ? '---': data.company
      this.userModel.followers = data.followers.toString()
      
      
    },error => {
      console.log(error)
      if(error.status == 404){
        this.user = []
        console.log('usuario nao encontrado')
        this.router.navigate([`profile/usuario-nao-econtrado`])
        this.userNotFound = true;
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
      let listaStars:any[] = [0]
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

  ngOnDestroy(){
    /* this.dataService.data.unsubscribe() */
  }

 

}
