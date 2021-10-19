import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/service/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    /* this.dataService.data.subscribe(event => console.log('subscribe do termo da pesquisa no home',event)) */
  }

  ngOnDestroy() {
    /* this.dataService.data.unsubscribe() */
  }

}
