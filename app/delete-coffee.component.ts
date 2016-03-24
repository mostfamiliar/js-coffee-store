import { Component, EventEmitter } from 'angular2/core';
import { CoffeeComponent } from './coffee.component';
import { Coffee } from './coffee.model';

@Component ({
  selector: 'delete-coffee',
  inputs: ['coffee', 'coffeeList'],
  template: `
  <button (click)="deleteCoffee(coffee)" class="btn delete-btn">Delete Roast</button>
  `
})


export class DeleteCoffeeComponent {
  public coffee: Coffee;
  public coffeeList: Coffee[];

  deleteCoffee(coffee: Coffee, coffeeList: Coffee[]): void {
    var index = this.coffeeList.indexOf(coffee);
    this.coffeeList.splice(index, 1);
  }


}
