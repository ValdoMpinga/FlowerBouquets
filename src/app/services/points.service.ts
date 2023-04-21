import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PointsService {
  private readonly pointsKey = 'points';
  private readonly totalAmountKey = 'totalAmount';

  private points: number = 0;
  private totalAmount: number = 0;

  constructor() {
    const points = localStorage.getItem(this.pointsKey);
    if (points !== null) {
      this.points = parseInt(points);
    }

    const totalAmount = localStorage.getItem(this.totalAmountKey);
    if (totalAmount !== null) {
      this.totalAmount = parseInt(totalAmount);
    }
  }

  getPoints(): number {
    return this.points;
  }

  addPoints(points: number): void {
    this.points += points;
    localStorage.setItem(this.pointsKey, this.points.toString());
  }

  pay(amount: number): boolean {
    this.totalAmount += amount;
    localStorage.setItem(this.totalAmountKey, this.totalAmount.toString());

    if (this.totalAmount >= 100) {
      this.addPoints(10);
      this.totalAmount = 0;
      localStorage.setItem(this.totalAmountKey, '0');
      return true;
    } else return false;
  }
}
