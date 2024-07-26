import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPolComponent } from './add-pol.component';

describe('AddPolComponent', () => {
  let component: AddPolComponent;
  let fixture: ComponentFixture<AddPolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
