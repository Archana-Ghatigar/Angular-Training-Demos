import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { User } from './User';

@Injectable({
  providedIn:'root'
})
export class UserService {
  private userList: Array<User>;
  constructor(private http: HttpClient) {
     this.getUserListAsPromise();
     console.log('User Service called');  
     
     }
  getList(){
    return this.userList;
  }
  getUserList(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  getUserDetails(userid:number): Observable<User> {
    let options = {
      params:{id:userid}
    }
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/'+userid);
  }
  addUser(userObj:any):Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/users',userObj);
  }
  async getUserListAsPromise(){
    //IMPORTANT: the data is directly assigned. No need for then() to consume the promise
    this.userList = await this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .toPromise();
    console.log('waited for http req resolve');
  }
  
    
    //setTimeout(()=>{
        //}, 2000);
    //userObj = this.userList.find(user => user.username === name);
    
  
  }
  
  /*remove(index: number): void {
    this.userList.splice(index, 1);
  }*/
  
  /*updateUser(userobj:any){
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let url;
    return this.http.put(url, userobj, httpOptions).pipe(
      tap(_ => console.log(`updated user id=${userobj.id}`))
    ); //tap is used to further process the results.
  }*/
