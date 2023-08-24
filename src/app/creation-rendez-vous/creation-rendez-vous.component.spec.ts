import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationRendezVousComponent } from './creation-rendez-vous.component';

describe('CreationRendezVousComponent', () => {
  let component: CreationRendezVousComponent;
  let fixture: ComponentFixture<CreationRendezVousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationRendezVousComponent]
    });
    fixture = TestBed.createComponent(CreationRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
