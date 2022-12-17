import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { LoggerServiceService } from './logger-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  
  constructor(@Optional() private loggerService : LoggerServiceService){

  }
  // @ViewChild('user', {read : ViewContainerRef}) vcr! : ViewContainerRef;
  
    @ViewChild('name', {static: true}) nameEl! : ElementRef;

    ngOnInit() {
      this.loggerService?.logMessage('AppComponent.ngOnInit')
    }

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
  }
  title = 'hotelinventoryapp';
}
