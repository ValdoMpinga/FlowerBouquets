import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, switchMap } from 'rxjs/operators';

export interface Flower {
  id: number;
  name: string;
  price: number;
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
        const modifiedFlowers = flowers.map((flower) =>
        {
          return flower;
        });
        return modifiedFlowers as Flower[];
      })
    );
  }

  //Starts after 5 seconds

  //  getFlowers(): Observable<Flower[]> {
  //   return timer(5000).pipe(
  //     switchMap(() => {
  //       return this.http.get<any[]>(environment.FLOWERS_BOUQUETS_API_URL).pipe(
  //         map((flowers) => {
  //           const modifiedFlowers = flowers.map((flower) => {
  //             return flower;
  //           });
  //           return modifiedFlowers as Flower[];
  //         })
  //       );
  //     })
  //   );
  // }
}
