import { HttpErrorResponse, HttpEventType, HttpRequest } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { IAppconfig } from '../AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { HeaderComponent } from '../header/header.component';
import { localstorage } from '../javascript.api.token';
import { IRoom, IRoomList } from './IRoom';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit, OnDestroy {
  roomList: IRoomList[] = []

  error$ = new Subject();
  // word$ = this.roomService.getWord$.pipe(
  //   catchError((err) => {
  //     this.error$.next(err.message);
  //     return of();
  //   })
  // );

  // wordCount$ = this.roomService.getWord$.pipe(
  //   map((value) => { value.length })
  // )

  // @ViewChildren(HeaderComponent) headerComponent! : QueryList<HeaderComponent>;
  ngAfterViewInit(): void {
    // console.log(this.headerComponent);
  }
  wordName$ = this.roomService.getWord$.pipe(map(
    data => data.name
  ))
  wordDefinition$ = this.roomService.getWord$.pipe(map(
    (data => data.definitions[0].definition)
  ))
  ngOnInit(): void {

    this.roomService.getWord$.subscribe(
      data => console.log(data)
      )
    

    this.roomService.getPhotos2$().subscribe(
      (data) => console.log(data)
    )














    // console.log(this.headerComponent)
    // this.roomService.getWord$.subscribe(data => console.log(data)
    // )
    // this.roomService.getWord$.subscribe({
    //   next: (data) => console.log(data),
    //   error : (err) => {
    //     console.log(err)
    //   },
    //   complete :() => console.log("request completed.")
    // })
    // this.deleteWord(7);
    // this.stream.subscribe(next => {
    //   console.log(next);

    // }, error => {
    //   console.log(error);
    // }, () => {
    //   console.log("Successfully comple");

    // })
    // this.stream.subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log("completed"),
    //   error: (err) => console.log(err)
    // })
    // localStorage.setItem('name', 'Furkan')


    // this.roomService.getPhotos$.subscribe((event) => {
    //   if (event.type == HttpEventType.Response) {
    //     console.log(event.body);
    //   }
    // })
    // let totalData = 0;

    //   this.roomService.getPhotos().subscribe(data => {
    //     switch (data.type) {
    //       case HttpEventType.Sent:
    //         console.log("Request sent!");
    //         break;
    //       case HttpEventType.ResponseHeader:
    //         console.log(`response header is reached:`);
    //         break;
    //       case HttpEventType.DownloadProgress:
    //         totalData += data.loaded; // the bytes gets loaded as time pass
    //         console.log(`the total downloaded byte: ${totalData}`)
    //         break;
    //       case HttpEventType.Response:
    //         console.log(`the received data:
    //         ${data.body}`); //response's body
    //         break;
    //       default:
    //         break;
    //     }
    //   }
    //   )
  }
  constructor(private roomService: RoomsService) {
  }

  subscribtion !: Subscription;
  deleteWord(id: number) {
    this.subscribtion = this.roomService.deleteWord(id).subscribe({
      error: (err: HttpErrorResponse) => console.log(err.message),
      complete: () => console.log("delete method completed.")
    })
  }
  ngOnDestroy(): void {
    if (this.subscribtion)
      this.subscribtion.unsubscribe();
  }


  stream = new Observable(observer => {
    observer.next(this.hideRooms);
    observer.complete()
  });

  numberOfRooms: number = 10;
  hideRooms: boolean = true;
  public rooms: IRoom = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  };


  toggle(): void {
    this.hideRooms = !this.hideRooms;
  }
  hotelName: string = "Hilton Hotel";

  selectRoom(room: IRoomList) {
    console.log(room);
  }

  title!: string;

  roomNumber : number = 3;
  addRoom() {
    const room: IRoomList = {
      roomNumber: this.roomNumber++,
      roomType: "Ultra Premium VIP Deluxe Room",
      amenities: "Air conditioner, Free mini bar, internet and TV",
      price: 22500,
      photos: "https://picsum.photos/200/300",
      checkinTime: new Date(2022, 11, 29),
      checkoutTime: new Date(2023, 1, 29),
      rating: 3.31
    }
    this.roomList = [...this.roomList, room];
  }
  // getWord() {
  //   this.roomService.getWord$.subscribe({
  //     next: (data) => console.log(data),
  //     error: (err) => {
  //       console.log(err)
  //     },
  //     complete: () => console.log("request completed.")
  //   })
  // }


}
