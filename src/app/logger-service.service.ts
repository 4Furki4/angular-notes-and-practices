import { Injectable } from '@angular/core';

@Injectable()
export class LoggerServiceService {

  constructor() { }

  logMessage(msg: string) {
    console.log(msg);
  }
}
