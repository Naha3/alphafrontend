import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsumateViewComponent } from './esumate-view.component';

describe('EsumateViewComponent', () => {
  let component: EsumateViewComponent;
  let fixture: ComponentFixture<EsumateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsumateViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsumateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
