import Carousel from '@components/home/carousel';
import MenuGrid from '@components/home/menu-grid';

function Home() {
  return (
    <div className="home">
      <div className="mt-[110px] laptop:mt-10">
        <h1 className="text-42 text-center font-bold laptop:text-2xl">
          DISCOVER MODELS
        </h1>
        <Carousel />
      </div>
      <MenuGrid />
    </div>
  );
}

export default Home;
