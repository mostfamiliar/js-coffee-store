import { Pipe, PipeTransform } from 'angular2/core';
import { Coffee } from './coffee.model';

@Pipe({
  name: 'region',
  pure: false
})

export class RegionPipe implements PipeTransform {
  transform(input: Coffee[], args) {
    var desiredCoffeeFilter = args[0];
    console.log(args[0]);
    console.log(input);
    if(desiredCoffeeFilter === 'african') {
      return input.filter((coffee) => {
         return coffee.region === 'Africa';
      })
    } else if(desiredCoffeeFilter === 'central america') {
      return input.filter((coffee) => {
        return coffee.region === 'Central America';
      });
    } else if (desiredCoffeeFilter === 'south america') {
      return input.filter((coffee) => {
        return coffee.region === 'South America';
      });
    } else {
      return input;
    }
  }
}
