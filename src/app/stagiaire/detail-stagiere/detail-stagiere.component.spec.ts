import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStagiereComponent } from './detail-stagiere.component';

describe('DetailStagiereComponent', () => {
  let component: DetailStagiereComponent;
  let fixture: ComponentFixture<DetailStagiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailStagiereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailStagiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
