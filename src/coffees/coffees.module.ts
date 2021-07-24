import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from 'src/coffees/coffee.controller';
import { CoffeesService } from './coffees.service';
import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entitties/coffee.enitity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
