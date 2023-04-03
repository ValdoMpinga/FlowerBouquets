import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReminderFormPage } from './reminder-form.page';

describe('ReminderFormPage', () => {
  let component: ReminderFormPage;
  let fixture: ComponentFixture<ReminderFormPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReminderFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
