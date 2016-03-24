import { Component, EventEmitter } from 'angular2/core';
import { CoffeeComponent } from './coffee.component';
import { Coffee } from './coffee.model';
import { RegionPipe } from './region-pipe';
import { EditCoffeeComponent } from './edit-coffee.component';
import { NewCoffeeComponent } from './add-coffee.component';


@Component({
  selector: 'coffee-list',
  inputs: ['coffeeList'],
  outputs: ['onCoffeeSelect'],
  pipes: [RegionPipe],
  directives: [CoffeeComponent, EditCoffeeComponent, NewCoffeeComponent],
  template: `
    <select (change)="onChange($event.target.value)" class="filter form-control">
      <option value="all">Show All</option>
      <option value="african">African</option>
      <option value="central america">Central America</option>
      <option value="south america">South America</option>
    </select>
    <coffee-display *ngFor="#coffee of coffeeList | region:filterRegion" (click)="coffeeClicked(coffee)" [class.selected]="coffee === selectedCoffee" [coffee]="coffee">
    </coffee-display>
    <edit-coffee *ngIf="selectedCoffee" [coffee]="selectedCoffee"></edit-coffee>
    <new-coffee (onSubmitNewCoffee)="createCoffee($event)"></new-coffee>


  `
})

export class CoffeeListComponent {
  public coffeeList: Coffee[];
  public onCoffeeSelect: EventEmitter<Coffee>;
  public filterRegion: string = "all";
  public selectedCoffee: Coffee;
  constructor() {
    this.onCoffeeSelect = new EventEmitter();
  }
  coffeeClicked(clickedCoffee: Coffee): void {
    this.selectedCoffee = clickedCoffee;
    this.onCoffeeSelect.emit(clickedCoffee);
  }
  createCoffee(emitArr): void {
    this.coffeeList.push(
      new Coffee([emitArr[0], emitArr[1], emitArr[2], emitArr[3], emitArr[4]])
    );
  }
  onChange(filterOption) {
      console.log(this.coffeeList);
    this.filterRegion = filterOption;
  }
}
