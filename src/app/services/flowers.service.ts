import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

export interface FlowersInterface {
  id: number;
  created_at: string;
  flower_name: string;
  flower_price: number;
  flower_image: string;
}

@Injectable({
  providedIn: 'root',
})
export class FlowersService {
  // private url = 'https://jsonplaceholder.typicode.com/todos/1';

  private _flowers: BehaviorSubject<FlowersInterface[]> = new BehaviorSubject<
    FlowersInterface[]
  >([]);

  private supabase: SupabaseClient;

  constructor(private http: HttpClient) {
    this.supabase = createClient(
      environment.SUPABASE_URL,
      environment.SUPABASE_KEY
    );
  }

  async getFlowers() {
    try {
      const { data: flowersData, error } = await this.supabase
        .from('flowers')
        .select('*');
      if (error) throw error;

      console.log('1 ', flowersData);

      const flowers: FlowersInterface[] = flowersData.map((data: any) => ({
        id: data.id,
        created_at: data.created_at,
        flower_name: data.flower_name,
        flower_price: data.flower_price,
        flower_image: data.flower_image,
      }));
      console.log('2 ', flowers);

      this._flowers.next(flowers); // push the latest value to the BehaviorSubject
      console.log('3 ', this._flowers);
    } catch (error) {
      console.error(error);
    }
  }

  flowers(): Observable<FlowersInterface[]> {
    return this._flowers.asObservable();
  }

  // getTodo() {
  //   return this.http.get(this.url);
  // }
}
