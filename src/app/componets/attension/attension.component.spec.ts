import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttensionComponent } from './attension.component';

describe('AttensionComponent', () => {
  let component: AttensionComponent;
  let fixture: ComponentFixture<AttensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttensionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
