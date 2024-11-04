import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlDialog2Component } from './html-dialog2.component';

describe('HtmlDialog2Component', () => {
  let component: HtmlDialog2Component;
  let fixture: ComponentFixture<HtmlDialog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlDialog2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlDialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
