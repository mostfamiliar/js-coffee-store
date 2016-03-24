import { Component, EventEmitter } from 'angular2/core';
import { CoffeeComponent } from './coffee.component';
import { Coffee } from './coffee.model';

@Component ({
  selector: 'add-to-cart',
  inputs: ['coffee'],
  template: `
  <button (click)="addToCart(coffee)" class="btn btn-info">Add to Cart</button>
  `
})

export class AddToCartComponent {
  public coffee: Coffee;
  public cartArr: any[] = [];
  addToCart(coffee: Coffee, cartArr: any[]): void {


    this.cartArr.push(coffee);
    console.log(this.cartArr);
    // return this.cartArr;
  }
}
