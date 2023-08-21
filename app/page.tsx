import Header from '@/components/header/Header';
import FindBox from '@/components/find-box/FindBox';
import Cards from '@/components/cards/Cards';

export default function Home() {
  return (
    <div className='min-h-screen min-w-ful'>
      <Header />
      <FindBox />
      <Cards />
    </div>
  );
}
