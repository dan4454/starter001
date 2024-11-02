import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallModal1Component } from './call-modal1.component';

describe('CallModal1Component', () => {
  let component: CallModal1Component;
  let fixture: ComponentFixture<CallModal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallModal1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallModal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
