import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  items = [
    {
      id: 1,
      name: 'Rose',
      price: '10€',
      image:
        'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Tulip',
      price: '7€',
      image:
        'https://images.pexels.com/photos/1883385/pexels-photo-1883385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      name: 'Lily',
      price: '12€',
      image:
        'https://images.pexels.com/photos/132466/pexels-photo-132466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      name: 'Daisy',
      price: '5€',
      image:
        'https://images.pexels.com/photos/67857/daisy-flower-spring-marguerite-67857.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      name: 'Orchid',
      price: '15€',
      image:
        'https://images.pexels.com/photos/40744/orchid-flower-plant-exotic-40744.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      name: 'Carnation',
      price: '4€',
      image:
        'https://images.pexels.com/photos/894751/pexels-photo-894751.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 7,
      name: 'Sunflower',
      price: '8€',
      image:
        'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 8,
      name: 'Hydrangea',
      price: '11€',
      image:
        'https://images.pexels.com/photos/414510/pexels-photo-414510.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 9,
      name: 'Peony',
      price: '14€',
      image:
        'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 10,
      name: 'Lilac',
      price: '6€',
      image:
        'https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  cartItems: CartItem[]=[];

  constructor(private cartService: CartService) {}

  ngOnInit() {
   this.cartService.getCart().then((items) => {
     this.cartItems = items;
     console.log('Cart Items:', items);
   });
  }
}
