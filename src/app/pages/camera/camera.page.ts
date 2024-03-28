import { Component } from '@angular/core';
import { IonHeader, IonMenu, IonToolbar, IonTitle, IonContent, IonGrid, IonCol, IonRow, IonMenuToggle, IonMenuButton, IonButtons, IonLabel, IonItem, IonList, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondarypage',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonGrid, IonCol, IonContent, IonRow, IonMenuToggle, IonMenuButton, IonButtons, IonLabel, IonItem, IonList, RouterModule],
})
export class CameraPage {

  constructor(private router: Router) { }

  videoRef:any;

  ngOnInit(): void {
    this.videoRef = document.getElementById('videoElement');
    console.log(this.videoRef);
    this.setupCamera();
  }

  ngOnDestroy() {
    if (this.videoRef && this.videoRef.srcObject) {
      const tracks = (this.videoRef.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
  }

  setupCamera() {
    navigator.mediaDevices.getUserMedia({
      video:true,
      audio:false,
    }).then(stream => {
      console.log(stream)
      this.videoRef.srcObject = stream;
    })
  }

  takePhotoAndRedirect() {
    const canvas = document.createElement('canvas');
    canvas.width = 185;
    canvas.height = 185;
    const context = canvas.getContext('2d');
    
    if (context) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY);
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.fillStyle = 'red';
      context.fill();
      context.closePath();
  
      context.save();
  
      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.closePath();
      context.clip();
  
      context.drawImage(this.videoRef, 0, 0, canvas.width, canvas.height);
  
      context.restore();
  
      const imageDataURL = canvas.toDataURL('image/png');
  
      localStorage.setItem('capturedImage', imageDataURL);
  
      this.router.navigateByUrl('/edit');
    } else {
      console.error('Não foi possível obter o contexto 2D do canvas.');
    }
  }

  redirectToAnotherPage() {
    window.location.href = "/home";
  }
}
