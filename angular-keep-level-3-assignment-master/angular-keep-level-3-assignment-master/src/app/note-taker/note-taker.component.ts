
import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent implements OnInit {
  errMessage: string;
  note: Note = new Note();
  notes: Array<Note>=[];
  
  constructor(private notesService: NotesService){ }
  ngOnInit(){

   
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
      this.errMessage = 'Http failure response for http://localhost:3000/api/v1/notes: 404 Not Found';
    });}

}

}