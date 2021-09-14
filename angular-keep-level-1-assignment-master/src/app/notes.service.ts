import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
import { HttpClient} from  '@angular/common/http';

@Injectable()
export class NotesService {

  constructor(private httpclient:HttpClient){}

  getNotes(): Observable<Array<Note>> {
    return this.httpclient.get<Array<Note>>("http://localhost:3000/notes");

 }

 addNote(note: Note): Observable<Note> {

    return this.httpclient.post<Note>("http://localhost:3000/notes",note);

  }

}
