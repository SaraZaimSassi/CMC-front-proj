import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipemantEditComponent } from './equipemant-edit.component';

describe('EquipemantEditComponent', () => {
  let component: EquipemantEditComponent;
  let fixture: ComponentFixture<EquipemantEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipemantEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipemantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
