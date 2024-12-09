import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateGalleryComponent } from './estimate-gallery.component';

describe('EstimateGalleryComponent', () => {
  let component: EstimateGalleryComponent;
  let fixture: ComponentFixture<EstimateGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstimateGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstimateGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
