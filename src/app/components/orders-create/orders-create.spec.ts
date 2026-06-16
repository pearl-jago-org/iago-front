import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCreate } from './orders-create';

describe('OrdersCreate', () => {
  let component: OrdersCreate;
  let fixture: ComponentFixture<OrdersCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
