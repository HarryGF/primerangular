import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMultiplicarComponentV2 } from './tabla-multiplicar-component-v2';

describe('TablaMultiplicarComponentV2', () => {
  let component: TablaMultiplicarComponentV2;
  let fixture: ComponentFixture<TablaMultiplicarComponentV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMultiplicarComponentV2],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicarComponentV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
