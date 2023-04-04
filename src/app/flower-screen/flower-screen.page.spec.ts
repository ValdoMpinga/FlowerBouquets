import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlowerScreenPage } from './flower-screen.page';

describe('FlowerScreenPage', () => {
  let component: FlowerScreenPage;
  let fixture: ComponentFixture<FlowerScreenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FlowerScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
