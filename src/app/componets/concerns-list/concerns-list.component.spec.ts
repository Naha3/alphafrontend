import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcernsListComponent } from './concerns-list.component';

describe('ConcernsListComponent', () => {
  let component: ConcernsListComponent;
  let fixture: ComponentFixture<ConcernsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcernsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcernsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
