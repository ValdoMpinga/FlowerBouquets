import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flowers-card',
  templateUrl: './flowers-card.component.html',
  styleUrls: ['./flowers-card.component.scss'],
})
export class FlowersCardComponent implements OnInit {
  @Input() flowersImage: string = '';
  @Input() flowersName: string = '';
  @Input() flowersPrice: string = '';

  constructor(private router: Router) {}

   goToFlowerDetails() {
    const data = {
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
