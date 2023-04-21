import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  points: number = 0;

  constructor(private pointsService: PointsService) {
    this.points = this.pointsService.getPoints()
  }

  ngOnInit() {}
}
