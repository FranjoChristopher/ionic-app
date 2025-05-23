import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../services/cart.service';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
  IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonCardContent, IonButton, IonGrid, IonRow, IonCol,
  IonBadge, IonList, ToastController // ✅ Import ToastController
} from '@ionic/angular/standalone';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonCardContent, IonButton, IonGrid, IonRow, IonCol,
    IonBadge, IonList
  ]
})
export class Tab1Page implements OnInit {
  products: Product[] = [];
  private productsApiUrl = 'http://localhost/HYBRID/final-proj/angular/shopease-tabs/api/get_products.php';

  constructor(
    private http: HttpClient,
    public cartService: CartService,
    private toastController: ToastController // ✅ Inject ToastController
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<any[]>(this.productsApiUrl).subscribe({
      next: (data) => {
        this.products = data.map(p => ({
          id: p.id,
          title: p.title,
          price: +p.price,
          description: p.description,
          image: p.image 
            ? '/assets/images/' + p.image.split('/').pop() 
            : '/assets/default-image.png'
        }));
      },
      error: (err) => {
        console.error('Failed to load products', err);
      }
    });
  }

  async addToCart(product: Product) {
    this.cartService.addToCart(product);

    const toast = await this.toastController.create({
      message: `${product.title} added to cart!`,
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });

    await toast.present();
  }
}
