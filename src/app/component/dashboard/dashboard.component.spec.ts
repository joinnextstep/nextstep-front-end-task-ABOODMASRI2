import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: ashboardComponent;
  let fixture: ComponentFixture<ashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
