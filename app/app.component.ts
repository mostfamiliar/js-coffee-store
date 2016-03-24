import { Component, EventEmitter } from 'angular2/core';
import { CoffeeListComponent } from './coffee-list.component';
import { Coffee } from './coffee.model';

@Component({
  selector: 'my-app',
  directives: [CoffeeListComponent],
  template: `
  <div class="container">
  <h3>COFFEE LIST</h3>
  <coffee-list [coffeeList]="coffees" (onCoffeeSelect)="coffeeWasSelected($event)"></coffee-list>
  </div>
  `
})

export class AppComponent {
  public coffees: Coffee[];
  constructor() {
    this.coffees = [
      new Coffee(["Water Ave", "Guatemala Santa Isabel", 18, "Central America", "Aged black tea, fig jam"]),
      new Coffee(["Heart", "Ethiopia Duromina", 22, "Africa", "Peach, brown sugar"]),
      new Coffee(["Blue Bottle", "Kenya Kiambu Yara Peaberry", 16, "Africa", "Hibiscus, lemon"]),
      new Coffee(["49th Parallel", "Hondruas el ocotillo - late harvest", 21, "Central America", "peach, tamarind"])
    ];
  }
  coffeeWasSelected(clickedCoffee: Coffee): void {
  }
}
