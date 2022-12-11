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

  PostWord (word : IWord) {
    this.htpp.post("https://localhost:5500/api/Dictionary/Words", word).pipe(catchError((err : HttpErrorResponse) => {
      this.errors.next(err.message);
      return of();
    }))
    .subscribe({
      next: data => {
        console.log(data)
      },
      error: (error :HttpErrorResponse) => {
        console.log(error);
      }
    })
  }
}
