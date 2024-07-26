import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolComponent } from './pol.component';

describe('PolComponent', () => {
  let component: PolComponent;
  let fixture: ComponentFixture<PolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
