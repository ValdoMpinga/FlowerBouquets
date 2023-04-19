import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

export interface Flower {
  id: number;
  name: string;
  price: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class FlowersService {
  constructor(private http: HttpClient) {}

  getFlowers(): Observable<Flower[]> {
    return this.http.get<any[]>(environment.FLOWERS_BOUQUETS_API_URL).pipe(
      map((flowers) => {
        const modifiedFlowers = flowers.map((flower) => {
          return flower._id;
        });
        return modifiedFlowers as Flower[];
      })
    );
  }
}
