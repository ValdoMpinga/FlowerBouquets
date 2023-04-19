import { Component, OnInit } from '@angular/core';
import { FlowersService, Flower } from '../services/flowers.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cartQuantity: number = 0;

  items:Flower[]=[]
  todo: any;
  flowers: Flower[] = [];
  a: any[] = [];

  constructor(private flowersService: FlowersService) {}

  ngOnInit() {
    this.flowersService.getFlowers().subscribe((data) => {
      console.log(data);
      this.items = data;
    });
  }
}
