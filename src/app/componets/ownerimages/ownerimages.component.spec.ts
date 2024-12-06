import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerimagesComponent } from './ownerimages.component';

describe('OwnerimagesComponent', () => {
  let component: OwnerimagesComponent;
  let fixture: ComponentFixture<OwnerimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnerimagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OwnerimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
