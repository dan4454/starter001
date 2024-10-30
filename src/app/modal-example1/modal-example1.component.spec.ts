import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExample1Component } from './modal-example1.component';

describe('ModalExample1Component', () => {
  let component: ModalExample1Component;
  let fixture: ComponentFixture<ModalExample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalExample1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
