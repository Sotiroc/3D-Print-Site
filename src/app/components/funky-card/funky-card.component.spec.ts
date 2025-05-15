import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkyCardComponent } from './funky-card.component';

describe('FunkyCardComponent', () => {
  let component: FunkyCardComponent;
  let fixture: ComponentFixture<FunkyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunkyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunkyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
