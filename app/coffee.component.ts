import { Component } from 'angular2/core';
import { Coffee } from './coffee.model';

@Component({
  selector: 'coffee-display',
  inputs: ['coffee'],
  template: `
  <br>
  <h2>{{ coffee.brand }}{{ coffee.name }} | {{ coffee.price }} {{ coffee.region }} {{ coffee.tastingNotes }}</h2>
  `

})

export class CoffeeComponent {
  public coffee: Coffee;
}
