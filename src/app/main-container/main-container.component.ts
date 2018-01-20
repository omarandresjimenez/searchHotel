import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Hotel }  from '../model/hotel';
import { Subscription } from 'rxjs/Subscription';
import { HotelsService } from '../services/hotels.service';


@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit, OnDestroy {
  @Input()
  public showCount = false;
  @Output()
  public onViewClick = new EventEmitter<string>();
  public hotels: Hotel[];
  public subHotels$ : Subscription;
  constructor(private serviceHotel: HotelsService) { }

  ngOnInit() {
    this.subHotels$ = this.serviceHotel.hotelSubject$
     .do(res => console.log(res))
     .subscribe(
      (res) => { 
       this.hotels = res;
       this.onViewHotel('');
      }
    )
  }

  ngOnDestroy() {
    this.subHotels$.unsubscribe();
  }

  public onViewHotel(name: string) {
     this.onViewClick.emit(name);
  }
}
