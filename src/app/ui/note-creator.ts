import { 
  Component ,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'note-creator',
  styles: [`
    .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    .full {
      height: 100px;
    }
  `],

  template: `
    <div 
      class="note-creator shadow-2"
      [ngStyle]="{'background-color': newNote.color}"
     >
      <form class="row" (submit)="onCreateNote()">
        <input
          type="text"
          [(ngModel)]="newNote.title"
          name="newNoteTitle"
          placeholder="Title"
          class="col-xs-10 title"
          *ngIf="fullForm"
        >
        <input
          type="text"
          [(ngModel)]="newNote.value"
          name="newNoteTitle"
          placeholder="Take a note..."
          class="col-xs-10"
          (focus)="toggle(true)"
        >
        <div 
          class="actions col-xs-12 row between-xs"
          *ngIf="fullForm"

        >
          <div class="col-xs-3">
            <color-picker
              [colors]="colors"
              (selected)="onColorSelect($event)"
             ></color-picker>
          </div>
          <button
            type="submit"
            class="btn-light"
           >
            Done
          </button>
        </div>
      </form>
      <pre>{{ newNote | json }} </pre>
    </div>
  `
})

export class NoteCreator {
  @Output() createNote = new EventEmitter();

  colors: string[] = ["white", "blue", "yellow", "red", "green"]


  newNote = {
    title: '',
    value: '',
    color: 'white'
  };

  fullForm: boolean = false;

  onCreateNote() {
    const { title, value, color } = this.newNote;

    console.log( { title, value});
    if (!title) {
      let title = '';
    }
    if (!value) {
      let value = '';
    }
    if (title && value) {
      this.createNote.emit({title, value, color});
    }

    this.reset();
  }

  reset() {
    this.newNote = {
      title: '',
      value: '',
      color: 'white'
    };

    this.toggle(false);
  }

  toggle(value: boolean) {
    this.fullForm = value;
  }

  onColorSelect(color: string) {
    this.newNote.color = color;
  }

 };

