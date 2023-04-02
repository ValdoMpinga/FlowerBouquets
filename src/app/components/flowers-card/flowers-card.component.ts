import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flowers-card',
  templateUrl: './flowers-card.component.html',
  styleUrls: ['./flowers-card.component.scss'],
})
export class FlowersCardComponent implements OnInit {
  @Input() flowersImage: string =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VJOEUC4vt5cxi8uJEbJkhwHaEo%26pid%3DApi&f=1&ipt=edcf40b8c87a9eab78af853721e55ea02968e2c22f13dc38179cdb198a850eaa&ipo=images';
  @Input() flowersName: string = 'Tulipas';
  @Input() flowersPrice: string = '10.99€';

  constructor() {}

  ngOnInit() {}
}
