export interface IRestaurantDetails {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

export interface IMenu {
  id: number;
  name: string;
  price: string;
  description: string;
  restaurant_id: number;
  created_at: Date;
  updated_at: Date;
}
