import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList, IonItem, IonLabel, IonThumbnail, 
  IonButton, IonBadge, IonCard, IonNote, IonIcon
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonThumbnail,
    IonButton, IonBadge, IonCard, IonNote, IonIcon
  ]
})
export class Tab2Page {
  constructor(public cartService: CartService) {}
}