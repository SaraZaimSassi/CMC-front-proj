import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStagiereComponent } from './list-stagiere.component';

describe('ListStagiereComponent', () => {
  let component: ListStagiereComponent;
  let fixture: ComponentFixture<ListStagiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListStagiereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStagiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
