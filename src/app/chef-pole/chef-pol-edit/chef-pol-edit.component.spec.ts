import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefPolEditComponent } from './chef-pol-edit.component';

describe('ChefPolEditComponent', () => {
  let component: ChefPolEditComponent;
  let fixture: ComponentFixture<ChefPolEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChefPolEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefPolEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
