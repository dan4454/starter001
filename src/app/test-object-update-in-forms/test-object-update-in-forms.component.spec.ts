import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObjectUpdateInFormsComponent } from './test-object-update-in-forms.component';

describe('TestObjectUpdateInFormsComponent', () => {
  let component: TestObjectUpdateInFormsComponent;
  let fixture: ComponentFixture<TestObjectUpdateInFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestObjectUpdateInFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestObjectUpdateInFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
