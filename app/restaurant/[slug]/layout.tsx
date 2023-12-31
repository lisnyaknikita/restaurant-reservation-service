import type { Metadata } from 'next';

import RestaurantName from '../components/restaurant-name/RestaurantName';

export const metadata: Metadata = {
  title: 'RRS | The Yacht Club',
  description: 'The Yacht Club details page',
};

export default function RestaurantLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RestaurantName />
      {children}
    </>
  );
}
