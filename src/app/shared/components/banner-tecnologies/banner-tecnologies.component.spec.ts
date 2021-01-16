import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTecnologiesComponent } from './banner-tecnologies.component';

describe('BannerTecnologiesComponent', () => {
  let component: BannerTecnologiesComponent;
  let fixture: ComponentFixture<BannerTecnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerTecnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTecnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
