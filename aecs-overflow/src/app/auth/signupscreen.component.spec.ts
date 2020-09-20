import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupscreenComponent } from './signupscreen.component';

describe('SignupscreenComponent', () => {
  let component: SignupscreenComponent;
  let fixture: ComponentFixture<SignupscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
