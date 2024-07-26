import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefPolDetailComponent } from './chef-pol-detail.component';

describe('ChefPolDetailComponent', () => {
  let component: ChefPolDetailComponent;
  let fixture: ComponentFixture<ChefPolDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChefPolDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefPolDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
