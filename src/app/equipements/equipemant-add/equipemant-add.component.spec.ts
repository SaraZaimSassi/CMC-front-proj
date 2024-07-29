import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipemantAddComponent } from './equipemant-add.component';

describe('EquipemantAddComponent', () => {
  let component: EquipemantAddComponent;
  let fixture: ComponentFixture<EquipemantAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipemantAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipemantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
