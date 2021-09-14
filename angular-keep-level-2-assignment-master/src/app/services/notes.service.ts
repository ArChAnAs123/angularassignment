import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../note';

import { HttpClient, HttpHeaders} from  '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class NotesService {
 
  private bearertoken: string;
  

  constructor(private httpclient:HttpClient, private authService: AuthenticationService){
   this.bearertoken = this.authService.getBearerToken();
  }

  getNotes(): Observable<Array<Note>> {
    
    return this.httpclient.get<Array<Note>>("http://localhost:3000/api/v1/notes", {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.bearertoken}`)
    });
    

  }

  addNote(note: Note): Observable<Note> {
    return this.httpclient.post<Note>("http://localhost:3000/api/v1/notes",note,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.bearertoken}`)
    });
  }

}
