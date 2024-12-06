import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcernapprovedComponent } from './concernapproved.component';

describe('ConcernapprovedComponent', () => {
  let component: ConcernapprovedComponent;
  let fixture: ComponentFixture<ConcernapprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcernapprovedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcernapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
