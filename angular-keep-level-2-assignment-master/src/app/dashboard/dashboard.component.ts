import { Component } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  errMessage: string;
  note: Note = new Note();
  notes: Array<Note>=[];
  
  constructor(private notesService: NotesService){ }
  ngOnInit(){

    this.notesService.getNotes().subscribe(response => {
      if (response) {
        this.notes = response;
      } else {
        this.errMessage = 'We are unable to retreive notes list.';
      }
    }, error => {
      this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
    });
  }

  takenote(){
    if (!this.note.text || !this.note.title) {
      this.errMessage = 'Title and Text both are required fields';
      return  this.errMessage;
    }
    else{

    this.notesService.addNote(this.note).subscribe(response => {
      
        this.notes.push(this.note);
        
      {
        this.errMessage = 'Title and Text both are required fields';
      }
    }, error => {
      this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
    });}
  }
}
