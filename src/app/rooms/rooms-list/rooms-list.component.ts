import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IRoomList } from '../IRoom';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {
  
  @Input() rooms : IRoomList[] = [];
  
  @Input() title : string = "";

  @Output() selectedRoom = new EventEmitter<IRoomList>();
  
  ngOnInit(): void {

    }
  constructor() {

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
