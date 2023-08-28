import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnerRendezVousComponent } from './donner-rendez-vous.component';

describe('DonnerRendezVousComponent', () => {
  let component: DonnerRendezVousComponent;
  let fixture: ComponentFixture<DonnerRendezVousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonnerRendezVousComponent]
    });
    fixture = TestBed.createComponent(DonnerRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
