import { Component, OnInit,OnDestroy } from '@angular/core';
import { DataService } from '../../shared/service/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy  {

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    /* this.dataService.data.subscribe(event => console.log('subscribe do termo da pesquisa no home',event)) */
    /* this.dataService.data.subscribe(event => console.log(event)) */
  }

  ngOnDestroy(){
    
  }

}
