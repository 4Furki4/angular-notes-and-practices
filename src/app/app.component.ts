import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LoggerServiceService } from './logger-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  
  constructor(@Optional() private loggerService : LoggerServiceService, private router : Router){

  }
  // @ViewChild('user', {read : ViewContainerRef}) vcr! : ViewContainerRef;
  
    @ViewChild('name', {static: true}) nameEl! : ElementRef;

    ngOnInit() {
      this.router.events.pipe(
        filter(event => event instanceof NavigationStart)
        )
      .subscribe((event) => console.log(event)
      );
      this.loggerService?.logMessage('AppComponent.ngOnInit')
    }

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
  }
  title = 'hotelinventoryapp';
}
