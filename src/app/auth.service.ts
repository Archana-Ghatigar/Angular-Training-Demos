import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AuthService {
  username:string;
  private subject: Subject<string> = new Subject<string>();
  constructor() { }

  private setUsername(username:string){
    this.subject.next(username);
    //this.username = username;

  }
  authenticate(username:string,password:string){
    //authentication code.
    this.setUsername(username);
  }

  getUsername():Observable<string>{
    return this.subject.asObservable();
  }
  logout(){
    this.subject.next(null);
  }
  /*getUsername(){
    return this.username;
  }*/

}
