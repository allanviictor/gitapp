import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  user:any[] []

  ngOnInit(): void {
  }



  returnUserSearch(event){
    if(this.user.length == 0){
      alert('nao existe usuario')
    }else{
      this.user = event
    }
  }

}
