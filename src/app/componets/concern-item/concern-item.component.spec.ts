import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcernItemComponent } from './concern-item.component';

describe('ConcernItemComponent', () => {
  let component: ConcernItemComponent;
  let fixture: ComponentFixture<ConcernItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcernItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcernItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
