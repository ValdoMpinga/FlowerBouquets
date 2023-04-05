import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemindersListPage } from './reminders-list.page';

describe('RemindersListPage', () => {
  let component: RemindersListPage;
  let fixture: ComponentFixture<RemindersListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RemindersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
