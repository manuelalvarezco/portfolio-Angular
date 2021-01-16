import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-tecnologies',
  templateUrl: './banner-tecnologies.component.html',
  styleUrls: ['./banner-tecnologies.component.scss']
})
export class BannerTecnologiesComponent implements OnInit {

  images: string[] = [
    'assets/img/banner-1.jpg',
    'assets/img/banner-2.jpg',
    'assets/img/banner-3.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
