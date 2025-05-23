import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, cartOutline } from 'ionicons/icons';
import { CartService } from '../services/cart.service';  // Adjust path as needed

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge], // added IonBadge here
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(
    public cartService: CartService  // <-- inject CartService here
  ) {
    addIcons({ triangle, ellipse, square, cartOutline });
  }
}
