import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../service/data.service'

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  @Input('user') user: any[] = []
  @Input('userRepos') userRepos: any[]= []

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {

    /* console.log('fragment',this.activatedRoute.params) */
    this.dataService.data.subscribe(event => {
      console.log('user',this.user)
      console.log('userrepos',this.userRepos)

    })
  }

}
