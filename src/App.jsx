import { useState } from 'react';
import Carousel from './components/Carousel';
import Carousel2 from './components/Carousel2';

function App() {
  const [carousel, setCarousel] = useState(1);
  const changeCarousel = () => {
    setCarousel((carousel) => (carousel === 2 ? carousel - 1 : carousel + 1));
  };
  return (
    <>
      <div className='flex items-center justify-center p-4 mb-16'>
        <h1>Carousel {carousel}</h1>
        <button className='btn_green' onClick={changeCarousel}>
          Change Carousel
        </button>
      </div>
      <div className={carousel === 2 ? 'app' : ''}>
        {carousel === 1 ? <Carousel /> : <Carousel2 />}
      </div>
    </>
  );
}

export default App;
