import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStagiereComponent } from './edit-stagiere.component';

describe('EditStagiereComponent', () => {
  let component: EditStagiereComponent;
  let fixture: ComponentFixture<EditStagiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditStagiereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStagiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
