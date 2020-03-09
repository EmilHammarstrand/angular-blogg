import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private loggedIn: BehaviorSubject<boolean>;

  constructor() {
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }
  setValue(newValue): void {
    this.loggedIn.next(newValue);
  }
  getValue(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
