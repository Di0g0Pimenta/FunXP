import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonMenuToggle, IonMenuButton, IonButtons, IonLabel, IonItem, IonList, } from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [RouterModule, IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonMenuToggle, IonMenuButton, IonButtons, IonLabel, IonItem, IonList, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private menuCtrl: MenuController) { }

  menuClicked(menuItem: string) {
    console.log(`Clicked: ${menuItem}`);
    // Your logic here
  }
  toggleMenu() {
    console.log('toggleMenu function called');
    this.menuCtrl.toggle();
  }
}
