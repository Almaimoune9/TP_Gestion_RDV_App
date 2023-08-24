import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherDetailRendezVousComponent } from './afficher-detail-rendez-vous.component';

describe('AfficherDetailRendezVousComponent', () => {
  let component: AfficherDetailRendezVousComponent;
  let fixture: ComponentFixture<AfficherDetailRendezVousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherDetailRendezVousComponent]
    });
    fixture = TestBed.createComponent(AfficherDetailRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
