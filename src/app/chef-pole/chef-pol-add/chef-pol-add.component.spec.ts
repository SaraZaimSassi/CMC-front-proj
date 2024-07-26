import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefPolAddComponent } from './chef-pol-add.component';

describe('ChefPolAddComponent', () => {
  let component: ChefPolAddComponent;
  let fixture: ComponentFixture<ChefPolAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChefPolAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefPolAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
