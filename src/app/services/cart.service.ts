import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

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

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    try {
      await this.storage.create();
      const savedCart = await this.storage.get(STORAGE_KEY);
      if (savedCart) {
        this.cart = savedCart;
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
    } catch (error) {
      console.error('Error clearing cart', error);
    }
  }

  async getTotalItemsInCart(): Promise<number> {
    let total = 0;
    const cart = await this.getCart();
    // console.log(cart);

    for (const item of cart) {
      total += item.quantity;
    }
    // console.log(total);

    return total;
  }
}
