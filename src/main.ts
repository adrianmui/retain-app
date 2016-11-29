import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App, providers, routes } from './app';
import { Main, NotesContainer, About } from './app/containers';
import { 
   AppBar, 
   NoteCard, 
   NoteCreator, 
   ColorPicker 
} from './app/ui';

@NgModule({
  declarations: [
    App,
    Main,
    AppBar,
    NoteCard,
    NotesContainer,
    About,
    NoteCreator,
    ColorPicker
    ],
  imports: [BrowserModule, 
            FormsModule, 
             HttpModule,
             routes],
  providers,
  bootstrap: [App]
})

export class AppModule {};

platformBrowserDynamic().bootstrapModule(AppModule);


