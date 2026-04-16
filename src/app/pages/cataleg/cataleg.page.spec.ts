import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalegPage } from './cataleg.page';

describe('CatalegPage', () => {
  let component: CatalegPage;
  let fixture: ComponentFixture<CatalegPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalegPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
