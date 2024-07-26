import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPolComponent } from './edit-pol.component';

describe('EditPolComponent', () => {
  let component: EditPolComponent;
  let fixture: ComponentFixture<EditPolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
