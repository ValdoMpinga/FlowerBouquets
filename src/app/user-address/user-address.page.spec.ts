import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAddressPage } from './user-address.page';

describe('UserAddressPage', () => {
  let component: UserAddressPage;
  let fixture: ComponentFixture<UserAddressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
