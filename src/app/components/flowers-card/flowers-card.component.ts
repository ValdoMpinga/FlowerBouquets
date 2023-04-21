import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flowers-card',
  templateUrl: './flowers-card.component.html',
  styleUrls: ['./flowers-card.component.scss'],
})

export class FlowersCardComponent implements OnInit {
  @Input() id: number = 0;
  @Input() flowersImage: string = '';
  @Input() flowersName: string = '';
  @Input() flowersPrice: number = 0;

  constructor(private router: Router) {}

  goToFlowerDetails() {
    const data = {
      id: this.id,
      flowersImage: this.flowersImage,
      flowersName: this.flowersName,
      flowersPrice: this.flowersPrice,
    };

    this.router.navigate(['/flower-screen'], {
      queryParams: { data: JSON.stringify(data) },
    });
  }

  ngOnInit() {}
}
