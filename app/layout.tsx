import Header from '@/components/header/Header';
import './globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Reservation Service',
  description:
    'Our Restaurant Reservation Service offers a convenient and efficient way to secure your dining experience. Browse through a variety of restaurants, select your preferred date and time, and effortlessly make reservations online. Enjoy a seamless dining journey with our user-friendly platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className='min-h-screen min-w-full'>
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
