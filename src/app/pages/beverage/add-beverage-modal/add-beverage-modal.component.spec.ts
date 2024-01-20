import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeverageModalComponent } from './add-beverage-modal.component';

describe('AddBeverageModalComponent', () => {
  let component: AddBeverageModalComponent;
  let fixture: ComponentFixture<AddBeverageModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBeverageModalComponent]
    });
    fixture = TestBed.createComponent(AddBeverageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
