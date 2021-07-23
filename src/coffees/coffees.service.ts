import { Injectable } from '@nestjs/common';
import { Coffee } from './entitties/coffee.enitity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'cofee',
      brand: 'nes',
      flavors: ['a', 'b'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find((coffee) => coffee.id === +id);
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    console.log('ran', id, updateCoffeeDto);
  }

  remove(id: string) {
    const i = this.coffees.findIndex((item) => item.id === +id);
    if (i >= 0) {
      this.coffees.splice(i, 1);
    }
  }
}
