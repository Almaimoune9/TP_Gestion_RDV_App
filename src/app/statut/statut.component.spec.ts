import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutComponent } from './statut.component';

describe('StatutComponent', () => {
  let component: StatutComponent;
  let fixture: ComponentFixture<StatutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatutComponent]
    });
    fixture = TestBed.createComponent(StatutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
