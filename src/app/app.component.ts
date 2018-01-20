import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
   public seletedHotel:string;

    constructor() {

    }

    ngOnInit() {
       this.seletedHotel = '';
    }

    public showMessage(name: string) {
      this.seletedHotel = name;
     // console.log(name);
    }

}

