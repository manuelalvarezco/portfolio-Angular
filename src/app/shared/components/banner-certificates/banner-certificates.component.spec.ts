import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCertificatesComponent } from './banner-certificates.component';

describe('BannerCertificatesComponent', () => {
  let component: BannerCertificatesComponent;
  let fixture: ComponentFixture<BannerCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
