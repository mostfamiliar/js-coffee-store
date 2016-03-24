import { Pipe, PipeTransform } from 'angular2/core';
import { Coffee } from './coffee.model';

@Pipe({
  name: 'region',
  pure: false
})

export class RegionPipe implements PipeTransform{
  transform(input: Coffee[], args) {
    var desiredCoffeeFilter = args[0];
    console.log(args[0]);
    if(desiredCoffeeFilter === 'african') {

    } else if(desiredCoffeeFilter === 'central america') {

    } else if (desiredCoffeeFilter === 'south america') {

    } else {
      return input;
    }
  }
}
