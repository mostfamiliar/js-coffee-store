import { Component } from 'angular2/core';
import { Coffee } from './coffee.model';
import { DeleteCoffeeComponent } from './delete-coffee.component';
import { AddToCartComponent } from './add-to-cart.component';


@Component({
  selector: 'coffee-display',
  inputs: ['coffee', 'coffeeList'],
  directives: [DeleteCoffeeComponent, AddToCartComponent],
  template: `
  <br>
  <div class="coffeeDisplay">
    <h2>{{ coffee.name }} \${{ coffee.price }}</h2>
    <h4>{{ coffee.brand }} {{ coffee.region }}</h4>
    <h6>{{ coffee.tastingNotes }}</h6>
  </div>
  <delete-coffee [coffee]="coffee" [coffeeList]="coffeeList"></delete-coffee>
  <add-to-cart [coffee]="coffee"></add-to-cart>
  `

})

export class CoffeeComponent {
  public coffee: Coffee;
  public coffeeList: Coffee[];
}
