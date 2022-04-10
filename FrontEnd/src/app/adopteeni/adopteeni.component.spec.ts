import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopteeniComponent } from './adopteeni.component';

describe('AdopteeniComponent', () => {
  let component: AdopteeniComponent;
  let fixture: ComponentFixture<AdopteeniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdopteeniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdopteeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
