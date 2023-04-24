import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  quantity: number;
}

const STORAGE_KEY = 'cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];
  private isInitialized = false;
   cartSubject = new BehaviorSubject<number>(0);

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    try {
      await this.storage.create();
      const savedCart = await this.storage.get(STORAGE_KEY);
      if (savedCart) {
        this.cart = savedCart;
        this.updateCartSubject();
      }
      this.isInitialized = true;
    } catch (error) {
      console.error('Error initializing cart', error);
    }
  }

  async getCart(): Promise<CartItem[]> {
    if (!this.isInitialized) {
      await this.init();
    }
    return this.cart;
  }

  async addItemToCart(item: CartItem): Promise<void> {
    try {
      const index = this.cart.findIndex((i) => i.id === item.id);
      if (index > -1) {
        this.cart[index].quantity += item.quantity;
      } else {
        this.cart.push(item);
      }
      await this.storage.set(STORAGE_KEY, this.cart);
      console.log(`Item with ID ${item.id} added to cart successfully.`);
      this.updateCartSubject();
    } catch (error) {
      console.error(`Error adding item with ID ${item.id} to cart: ${error}`);
      throw error;
    }
  }

  async removeItemFromCart(item: CartItem): Promise<void> {
    try {
      const index = this.cart.findIndex((i) => i.id === item.id);
      if (index > -1) {
        this.cart.splice(index, 1);
        await this.storage.set(STORAGE_KEY, this.cart);
        console.log('Item removed from cart:', item);
        this.updateCartSubject();
      }
    } catch (error) {
      console.error('Error removing item from cart', error);
    }
  }

  async clearCart(): Promise<void> {
    try {
      this.cart = [];
      await this.storage.remove(STORAGE_KEY);
      console.log('Cart cleared');
      this.updateCartSubject();
    } catch (error) {
      console.error('Error clearing cart', error);
    }
  }

  async getTotalItemsInCart(): Promise<number> {
    const cart = await this.getCart();
    let total = 0;
    for (const item of cart) {
      total += item.quantity;
    }
    return total;
  }

  getCartSubject() {
    return this.cartSubject.asObservable();
  }

  private updateCartSubject() {
    this.cartSubject.next(
      this.cart.reduce((total, item) => total + item.quantity, 0)
    );
  }
}
