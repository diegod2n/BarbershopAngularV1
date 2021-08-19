import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitalistComponent } from './citalist.component';

describe('CitalistComponent', () => {
  let component: CitalistComponent;
  let fixture: ComponentFixture<CitalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
