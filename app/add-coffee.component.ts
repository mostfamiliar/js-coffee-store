import { Component, EventEmitter } from 'angular2/core';
import { Coffee } from './coffee.model';

@Component ({
  selector: 'new-coffee',
  outputs: ['onSubmitNewCoffee'],
  template: `
    <div class="add-coffee-form">
      <h4>ADD COFFEE</h4>
      <div class="input-field">
        <input placeholder="Brand" #newBrand>
        <input placeholder="Name" #newName>
        <input placeholder="Price" #newPrice>
        <input placeholder="Region" #newRegion>
        <input placeholder="Tasting Notes" #newTastingNotes>
        <button (click)="addCoffee(newBrand, newName, newPrice, newRegion, newTastingNotes)">Add</button>
      </div>
    </div>
  `
})

export class NewCoffeeComponent {
  public coffee: Coffee;
  public onSubmitNewCoffee: EventEmitter<any[]>;
  constructor(){
    this.onSubmitNewCoffee = new EventEmitter();
  }
  addCoffee(newBrand: HTMLInputElement, newName: HTMLInputElement, newPrice: HTMLInputElement, newRegion: HTMLInputElement, newTastingNotes: HTMLInputElement) {
    var emitArr = [newBrand.value, newName.value, newPrice.value, newRegion.value, newTastingNotes.value];
      this.onSubmitNewCoffee.emit(emitArr);
      newBrand.value = "";
      newName.value = "";
      newPrice.value = "";
      newRegion.value = "";
      newTastingNotes.value = "";
  }
}
