import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourpalletComponent } from './colourpallet.component';

describe('ColourpalletComponent', () => {
  let component: ColourpalletComponent;
  let fixture: ComponentFixture<ColourpalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourpalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourpalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
