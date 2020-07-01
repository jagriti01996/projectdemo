import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  tab:string;

  slideData:[
    "assets/image/kaarwaa.n.jpg",
    "assets/image/imgk1.jpg",
    "assets/image/kaarwaa.n.jpg"
  ]
  
  ionViewWillEnter(){
    this.tab = 'about';
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  constructor() { }

  ngOnInit() {
    // this.slides.startAutoplay().then(()=>{})
  }
  // slideOpts = {
  //   initialSlide: 1,
  //   speed: 400
  // };
}
