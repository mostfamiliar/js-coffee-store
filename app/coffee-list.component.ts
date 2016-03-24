import { Component, EventEmitter } from 'angular2/core';
import { CoffeeComponent } from './coffee.component';
import { Coffee } from './coffee.model';

@Component({
  selector: 'coffee-list',
  inputs: ['coffeeList'],
  outputs: ['onCoffeeSelect'],
  directives: [CoffeeComponent],
  template: `
    <coffee-display *ngFor="#coffee of coffeeList" (click)="coffeeClicked(coffee)" [class.selected]="coffee === selectedCoffee" [coffee]="coffee">
    </coffee-display>
  `
})

export class CoffeeListComponent {
  public coffeeList: Coffee[];
  public onCoffeeSelect: EventEmitter<Coffee>;
  public selectedCoffee: Coffee;
  constructor() {
    this.onCoffeeSelect = new EventEmitter();
  }
  coffeeClicked(clickedCoffee: Coffee): void {
    this.selectedCoffee = clickedCoffee;
    this.onCoffeeSelect.emit(clickedCoffee);
  }
}
