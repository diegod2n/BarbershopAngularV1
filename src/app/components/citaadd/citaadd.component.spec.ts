import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaaddComponent } from './citaadd.component';

describe('CitaaddComponent', () => {
  let component: CitaaddComponent;
  let fixture: ComponentFixture<CitaaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
