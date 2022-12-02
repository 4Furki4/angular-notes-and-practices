import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { IRoomList } from '../IRoom';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  
  @Input() rooms : IRoomList[] = [];
  
  @Input() title : string = "";

  @Output() selectedRoom = new EventEmitter<IRoomList>();
  
  ngOnInit(): void {

    }
  constructor() {

  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy was called.");
    
    }
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['title']) {
        console.log(changes['title']);
        
      }
  }

  SelectRoom(room:IRoomList){
    this.selectedRoom.emit(room);
  }

}
