import { Cuisine, Location, PRICE } from '@prisma/client';

export interface ICard {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
}

export interface ICards {
  restaurants: ICard[];
}

export interface ICardItemProps {
  restaurant: ICard;
}
