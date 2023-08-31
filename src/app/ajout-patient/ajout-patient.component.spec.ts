import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPatientComponent } from './ajout-patient.component';

describe('AjoutPatientComponent', () => {
  let component: AjoutPatientComponent;
  let fixture: ComponentFixture<AjoutPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutPatientComponent]
    });
    fixture = TestBed.createComponent(AjoutPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
