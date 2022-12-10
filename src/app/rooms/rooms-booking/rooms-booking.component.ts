import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'hinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent {

  id$ : Observable<number> = this.router.params.pipe(map(value => value['id']));
  constructor(private router : ActivatedRoute){
    router.params.subscribe((params) => {
      console.log(params);
    })
  }
}
