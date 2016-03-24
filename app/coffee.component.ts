import { Component } from 'angular2/core';
import { Coffee } from './coffee.model';

@Component({
  selector: 'coffee-display',
  inputs: ['coffee'],
  template: `
  <br>
  <div class="coffeeDisplay">
    <h2>{{ coffee.name }} \${{ coffee.price }}</h2>
    <h4>{{ coffee.brand }} {{ coffee.region }}</h4>
    <h6>{{ coffee.tastingNotes }}</h6>
  </div>
  `

})

export class CoffeeComponent {
  public coffee: Coffee;
}
