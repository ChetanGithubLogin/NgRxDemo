import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouterNgRxComponent } from './couter-ng-rx.component';

describe('CouterNgRxComponent', () => {
  let component: CouterNgRxComponent;
  let fixture: ComponentFixture<CouterNgRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouterNgRxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouterNgRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
