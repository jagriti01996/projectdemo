import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  goToActivities() {
    this.menu.close();
    this.router.navigate(['activities']);
  }

  
  goToHome() {
    this.menu.close();
    this.router.navigate(['home']);
  }

  goToRegister() {
    this.menu.close();
    this.router.navigate(['register']);
  }

  goToBlog() {
    this.menu.close();
    this.router.navigate(['blog']);
  }
  constructor(private router: Router, private menu: MenuController) { }
    
  ngOnInit() {}

}
