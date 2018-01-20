import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public   hotelName: string = '';
  public   stars: boolean[] = [false,false,false,false,false]; 
  constructor(private hotelService: HotelsService) { }

  ngOnInit() {
  }

  public searchHotel() {
     this.hotelService.loadHotels(this.hotelName,this.stars);
  }
}
