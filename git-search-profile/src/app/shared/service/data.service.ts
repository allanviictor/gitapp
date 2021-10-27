import { Injectable } from '@angular/core';
import { Observer, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    public data: Subject<string> = new Subject()
    /* public data: Observer<string> */
}