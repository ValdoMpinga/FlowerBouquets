import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 3' },
    { title: 'Card 4', description: 'This is card 4' },
    { title: 'Card 5', description: 'This is card 5' },
    { title: 'Card 6', description: 'This is card 6' },
    { title: 'Card 7', description: 'This is card 7' },
    { title: 'Card 8', description: 'This is card 8' },
    { title: 'Card 9', description: 'This is card 9' },
    { title: 'Card 10', description: 'This is card 10' },
  ];
}
