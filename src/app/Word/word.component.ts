import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { mergeMap } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { IWord } from './IWord';
import { CustomValidators } from './validations/custom-validators';
import { WordService } from './word.service';

@Component({
  selector: 'hinv-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
  providers: [FormBuilder]
})
export class WordComponent implements OnInit {

  wordForm !: FormGroup;
  get definitions(): FormArray {
    return this.wordForm.get('definitions') as FormArray;
  }
  constructor(private wordService: WordService, private configService: ConfigService, private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.wordForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), CustomValidators.DenyProfanity, CustomValidators.DenyCountryCode, CustomValidators.DenyBeginsWithZero ]],
      definitions: this.formBuilder.array([this.formBuilder.group(
        {
          definition: ['', [Validators.required, Validators.minLength(3)]],
          definitionType: ['', [Validators.required, Validators.minLength(3)]],
          exampleSentence: ['']
        }
      )])
    });
    // this.wordForm.valueChanges.subscribe(value => {
    //   console.log(value);
    // });

    this.wordForm.valueChanges.pipe(mergeMap((value) => this.wordService.PostWord(value))).subscribe();
  }
  addNewWord() {
    console.log(this.wordForm.value);
    this.wordForm.reset();
  }
  errors$ = this.wordService.errors;
  successfulMessage!: string;
  word: IWord = {
    name: '',
    definitions: [
      {
        definition: '',
        definitionType: '',
        exampleSentence: ''
      }
    ]
  }

  AddWord(form: NgForm) {
    this.wordService.PostWord(this.word);
    form.resetForm();
    this.successfulMessage = "Word successfully added."
  }
  addDefinition() {
    this.definitions.push(this.formBuilder.group({ definition: ['', Validators.required], definitionType: ['', Validators.required], exampleSentence: ['', Validators.required] }));
  }
  removeDefinition(index: number) {
    this.definitions.removeAt(index);
  }


}
