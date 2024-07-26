import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefPolListComponent } from './chef-pol-list.component';

describe('ChefPolListComponent', () => {
  let component: ChefPolListComponent;
  let fixture: ComponentFixture<ChefPolListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChefPolListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefPolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
