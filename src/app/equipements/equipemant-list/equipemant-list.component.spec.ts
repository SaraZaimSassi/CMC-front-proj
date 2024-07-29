import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipemantListComponent } from './equipemant-list.component';

describe('EquipemantListComponent', () => {
  let component: EquipemantListComponent;
  let fixture: ComponentFixture<EquipemantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipemantListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipemantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
