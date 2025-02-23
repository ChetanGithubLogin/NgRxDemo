import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouterButtonsNgRxComponent } from './couter-buttons-ng-rx.component';

describe('CouterButtonsNgRxComponent', () => {
  let component: CouterButtonsNgRxComponent;
  let fixture: ComponentFixture<CouterButtonsNgRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouterButtonsNgRxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouterButtonsNgRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
