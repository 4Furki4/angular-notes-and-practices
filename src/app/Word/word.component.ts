import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfigService } from '../services/config.service';
import { IWord } from './IWord';
import { WordService } from './word.service';

@Component({
  selector: 'hinv-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent {

  constructor(private wordService : WordService, private configService : ConfigService){

  }
  errors$ = this.wordService.errors;
  successfulMessage! : string;
  word : IWord = {
    name : '',
    definitions : [
      {
        definition : '',
        definitionType : '',
        exampleSentence: ''
      }
    ]
  }

  AddWord(form : NgForm) {
    this.wordService.PostWord(this.word);
    form.resetForm();
    this.successfulMessage = "Word successfully added."
  }

}
