import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  quantity: number = 0;
  quantityValues: number[] = [];

  @Input() flowersImage: string =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VJOEUC4vt5cxi8uJEbJkhwHaEo%26pid%3DApi&f=1&ipt=edcf40b8c87a9eab78af853721e55ea02968e2c22f13dc38179cdb198a850eaa&ipo=images';
  @Input() flowersName: string = 'Tulipas';
  @Input() flowersPrice: string = '10.99€';
  @Input() flowersQuantity: number = 3;

  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.quantityValues.push(i);
    }
  }

  ngOnInit() {}
}
