import { Component, OnInit } from '@angular/core';
import { IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonMenuToggle, IonMenuButton, IonButtons, IonLabel, IonItem, IonList, IonButton, IonImg } from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  standalone: true,
  imports: [IonImg ,IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonGrid, IonCol, IonContent, IonRow, IonMenuToggle, IonMenuButton, IonButtons, IonLabel, IonItem, IonList, RouterModule],
})
export class ProfilePage {
  profileImageSrc: string = "./assets/profile.svg";
  lastCapturedImage: string = "";

  constructor(private menuCtrl: MenuController, private router: Router) { }

  menuClicked(menuItem: string) {
    console.log(`Clicked: ${menuItem}`);
  }
  toggleMenu() {
    console.log('toggleMenu function called');
    this.menuCtrl.toggle();
  }

  ngOnInit() {
    this.checkCapturedImage();
    setInterval(() => {
      this.checkCapturedImage();
    }, 1000);
  }

  checkCapturedImage() {
    const capturedImage = localStorage.getItem("capturedImage");
    if (capturedImage && capturedImage !== this.profileImageSrc) {
      this.profileImageSrc = capturedImage;
      this.lastCapturedImage = capturedImage;
    } else if (!capturedImage && this.lastCapturedImage !== "") {
      this.profileImageSrc = "./assets/profile.svg";
      this.lastCapturedImage = "";
    }
  }

  redirectToCamera() {
    this.router.navigate(['/camera']);
  }

}
