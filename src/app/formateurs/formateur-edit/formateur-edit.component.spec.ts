import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurEditComponent } from './formateur-edit.component';

describe('FormateurEditComponent', () => {
  let component: FormateurEditComponent;
  let fixture: ComponentFixture<FormateurEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormateurEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormateurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
