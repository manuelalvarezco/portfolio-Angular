import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BannerTecnologiesComponent } from './components/banner-tecnologies/banner-tecnologies.component';
import { BannerCertificatesComponent } from './components/banner-certificates/banner-certificates.component';
import { BannerProjectsComponent } from './components/banner-projects/banner-projects.component';


@NgModule({
  declarations: [
    BannerTecnologiesComponent,
    BannerCertificatesComponent,
    BannerProjectsComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ],
  exports:[
    BannerTecnologiesComponent,
    BannerCertificatesComponent,
    BannerProjectsComponent
  ]
})
export class SharedModule { }
