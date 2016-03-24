import { Component } from 'angular2/core';
import { Coffee } from './coffee.model';

@Component ({
  selector: 'edit-coffee',
  inputs: ['coffee'],
  template: `
  <h4>EDIT COFFEE</h4>
  <br>
  <div class="edit-form">
    <h5>Brand:</h5>
    <input [(ngModel)]="coffee.brand" class="edit-form"/>
    <h5>Name:</h5>
    <input [(ngModel)]="coffee.name" class="edit-form"/>
    <h5>Price:</h5>
    <input [(ngModel)]="coffee.price" type="number" class="edit-form"/>
    <h5>Region:</h5>
    <input [(ngModel)]="coffee.region" class="edit-form"/>
    <h5>Tasting Notes:</h5>
    <input [(ngModel)]="coffee.tastingNotes" class="edit-form"/>
  </div>
  `
})

export class EditCoffeeComponent {
  public coffee: Coffee;
}
