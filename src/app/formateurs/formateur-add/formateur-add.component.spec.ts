import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateurAddComponent } from './formateur-add.component';

describe('FormateurAddComponent', () => {
  let component: FormateurAddComponent;
  let fixture: ComponentFixture<FormateurAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormateurAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormateurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
