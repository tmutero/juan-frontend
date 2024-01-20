import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBarModalComponent } from './add-bar-modal.component';

describe('AddBarModalComponent', () => {
  let component: AddBarModalComponent;
  let fixture: ComponentFixture<AddBarModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBarModalComponent]
    });
    fixture = TestBed.createComponent(AddBarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
