import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcprintComponent } from './calcprint.component';

describe('CalcprintComponent', () => {
  let component: CalcprintComponent;
  let fixture: ComponentFixture<CalcprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcprintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
