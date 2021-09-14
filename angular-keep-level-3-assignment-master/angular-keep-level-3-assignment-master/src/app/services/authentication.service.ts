import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {

  constructor(private httpclient: HttpClient) {

  }

  authenticateUser(data) {
    return this.httpclient.post("http://localhost:3000/auth/v1/",data );

  }

  setBearerToken(token: string) {
    localStorage.setItem('authtoken',token);

  }

  getBearerToken() {
    return localStorage.getItem('authtoken');

  }

 isUserAuthenticated(token): Promise<boolean> {
      return this.httpclient.post('http://localhost:3000/auth/v1/isAuthenticated',{},{
         headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
      }).map(response => response['isAuthenticated']).toPromise();
  }
}
