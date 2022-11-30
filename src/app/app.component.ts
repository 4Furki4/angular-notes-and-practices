import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  
  // @ViewChild('user', {read : ViewContainerRef}) vcr! : ViewContainerRef;
  
    @ViewChild('name', {static: true}) nameEl! : ElementRef;

    ngOnInit() {
    }

  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent);
  }
  title = 'hotelinventoryapp';
}
