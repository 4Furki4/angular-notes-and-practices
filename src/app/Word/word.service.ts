import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, Subject } from 'rxjs';
import { IWord } from './IWord';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  errors = new Subject()
  constructor(private htpp : HttpClient) { }

  PostWord (word : any) {
    console.log("postword called");
    
    return this.htpp.post("https://jsonplaceholder.typicode.com/posts", word)
  }
}
