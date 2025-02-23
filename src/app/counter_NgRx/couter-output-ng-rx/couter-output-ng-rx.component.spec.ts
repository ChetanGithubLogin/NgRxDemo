import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouterOutputNgRxComponent } from './couter-output-ng-rx.component';

describe('CouterOutputNgRxComponent', () => {
  let component: CouterOutputNgRxComponent;
  let fixture: ComponentFixture<CouterOutputNgRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouterOutputNgRxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouterOutputNgRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
