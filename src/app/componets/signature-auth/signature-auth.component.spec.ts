import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureAuthComponent } from './signature-auth.component';

describe('SignatureAuthComponent', () => {
  let component: SignatureAuthComponent;
  let fixture: ComponentFixture<SignatureAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignatureAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignatureAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
