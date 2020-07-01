import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tab:string;

  slideOptions = {
    initialSlide: 0,
    speed: 700,
  };

  ionViewWillEnter(){
    this.tab = 'about';
  }
 
  constructor() { }

  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  ngOnInit() {}

}
