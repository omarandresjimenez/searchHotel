
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Hotel } from '../model/hotel';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class HotelsService {
    public hotelSubject$ = new BehaviorSubject<Hotel[]>(null);
  
    constructor(private http: HttpClient) {

    }
    
    loadHotels(filter: string, stars: boolean[]) {
        let params = new HttpParams();

        // Begin assigning parameters
        params = params.append('nameHotel', filter);
        params = params.append('star1', stars[0].toString());
        params = params.append('star2', stars[1].toString());
        params = params.append('star3', stars[2].toString());
        params = params.append('star4', stars[3].toString());
        params = params.append('star5', stars[4].toString());
        this.http.get<Hotel[]>('/api/hotels', { params })
            .subscribe((res:any) => {
                this.hotelSubject$.next(res.hotels);
            });


    }


}

