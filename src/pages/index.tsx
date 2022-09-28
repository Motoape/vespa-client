import Carousel from '@components/home/carousel';

function Home() {
  return (
    <div className="home__carousel mt-[110px] laptop:mt-10">
      <h1 className="text-42 text-center font-bold laptop:text-2xl">
        DISCOVER MODELS
      </h1>
      <Carousel />
    </div>
  );
}

export default Home;
