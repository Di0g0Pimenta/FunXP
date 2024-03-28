import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EditPage implements OnInit {

  capturedImageDataURL: string;

    constructor(private router: Router) {
        const imageDataURL = localStorage.getItem('capturedImage');
        this.capturedImageDataURL = imageDataURL ?? '';
    }

    cancelFunction() {
      this.router.navigate(['/camera']);
    }

    saveFunction() {
      this.router.navigate(['/profile']);
    }

  ngOnInit() {
  }

}
