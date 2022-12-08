import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { IAppconfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { IWord } from 'src/app/Word/IWord';
import { IRoomList } from '../IRoom';
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  
  roomList: IRoomList[] = [
    {
      roomType: "Deluxe Room",
      amenities: "Air conditioner",
      price: 1200,
      photos: "https://picsum.photos/200/300",
      checkinTime: new Date(2022, 11, 29),
      checkoutTime: new Date(2022, 12, 29),
      rating: 3.225
    },
    {
      roomType: "Ultra Deluxe Room",
      amenities: "Air conditioner, Free mini bar",
      price: 1800,
      photos: "https://picsum.photos/300/300",
      checkinTime: new Date(2022, 11, 29),
      checkoutTime: new Date(2022, 12, 29),
      rating: 4.412
    },
    {
      roomType: "Ultra Premium VIP Deluxe Room",
      amenities: "Air conditioner, Free mini bar, jacuzzi",
      price: 200000,
      photos: "https://picsum.photos/200/300",
      checkinTime: new Date(2022, 11, 29),
      checkoutTime: new Date(2022, 12, 29),
      rating: 4.1234
    }
  ]
  constructor(@Inject(APP_SERVICE_CONFIG) private config: IAppconfig, private http: HttpClient) {
    console.log("Room Service is just initialized ");
  }

  getRooms() {
    //return this.roomList;
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkZ1cmthbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE2NzA2NzkyMTZ9.UcDbnskNcpBHEyiZasNmzSVYnr1t4tYVsEwKjuDl64mwNPWn41wWYTr0z01kELpmTMLLyJWrHCctedytHyhfcA'
      })
    }
    let id = 1;
    return this.http.get(`https://localhost:5500/api/Dictionary/Words/${id}`, httpOptions);
  }

  addWord(word: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkZ1cmthbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE2NzA2NzkyMTZ9.UcDbnskNcpBHEyiZasNmzSVYnr1t4tYVsEwKjuDl64mwNPWn41wWYTr0z01kELpmTMLLyJWrHCctedytHyhfcA'
      })
    }
    return this.http.post<any>("https://localhost:5500/api/Dictionary/Words", word, httpOptions)
  }

  deleteWord(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkZ1cmthbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE2NzA2NzkyMTZ9.UcDbnskNcpBHEyiZasNmzSVYnr1t4tYVsEwKjuDl64mwNPWn41wWYTr0z01kELpmTMLLyJWrHCctedytHyhfcA'
      })
    }
    return this.http.delete(`https://localhost:5500/api/Dictionary/Words/${id}`, httpOptions)
  }
  request:any = new HttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/photos",
    {
      reportProgress: true
    }
  )
  getPhotos() {
    this.request = new HttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/photos",
      {
        reportProgress: true
      }
    )
    return this.http.request(this.request);
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IkZ1cmthbiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE2NzA2NzkyMTZ9.UcDbnskNcpBHEyiZasNmzSVYnr1t4tYVsEwKjuDl64mwNPWn41wWYTr0z01kELpmTMLLyJWrHCctedytHyhfcA'
    })
  }
  id=1;
   getWord$ = this.http.get<IWord>(`https://localhost:5500/api/Dictionary/Words/${this.id}`, this.httpOptions).pipe(shareReplay(1));


  getPhotos$ = this.http.request(this.request).pipe(
    shareReplay(1)
  )

  getPhotos2$ = () => this.http.get("https://jsonplaceholder.typicode.com/photos");
}
