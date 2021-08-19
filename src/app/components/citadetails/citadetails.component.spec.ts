import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitadetailsComponent } from './citadetails.component';

describe('CitadetailsComponent', () => {
  let component: CitadetailsComponent;
  let fixture: ComponentFixture<CitadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitadetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
