import { useState, useEffect } from 'react';
import { Pic1, Pic2, Pic3, Pic4 } from '../utils/picUrl';
import '../styles/style.css';
const Carousel = () => {
  const data = [
    { title: 'This is the picture number One 1st.', imgUrl: Pic1 },
    { title: 'This is the picture number Two 2nd.', imgUrl: Pic2 },
    { title: 'This is the picture number Three 3rd.', imgUrl: Pic3 },
    { title: 'This is the picture number Four 4th.', imgUrl: Pic4 },
  ];
  const [activeIdx, setActiveIdx] = useState(0);
  const [active, setActive] = useState(data[0]);
  useEffect(() => setActive(data[activeIdx]), [activeIdx]);
  const nextSlide = () => {
    if (activeIdx < data.length - 1) {
      setActiveIdx((activeIdx) => activeIdx + 1);
    } else {
      setActiveIdx(0);
    }
  };
  const prevSlide = () => {
    if (activeIdx > 0) {
      setActiveIdx((activeIdx) => activeIdx - 1);
    } else {
      setActiveIdx(data.length - 1);
    }
  };
  return (
    <div className='grid grid-cols-10 gap-2 mx-16'>
      <div className='col-span-7'>
        <div className='relative w-full'>
          <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
            <div className='duration-700 ease-in-out'>
              <img
                src={active.imgUrl}
                alt=''
                className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              />
            </div>
          </div>
          <div className='absolute z-30 flex space-x-3 -translate-x-1/2 shadow-md bottom-5 left-1/2 rtl:space-x-reverse'>
            {data.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-6 h-6 rounded-full border-2 border-spacing-4 m-1 focus:outline-none ${
                  idx === activeIdx
                    ? 'bg-black hover:bg-slate-700'
                    : 'bg-gray-300 hover:bg-gray-500'
                }`}></button>
            ))}
          </div>
          <button
            type='button'
            className='absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer hover:backdrop-blur-sm hover:bg-white/30 start-0 group focus:outline-none'
            onClick={prevSlide}>
            <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              {'<'}
              <span className='sr-only'>Previous</span>
            </span>
          </button>
          <button
            type='button'
            className='absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer hover:backdrop-blur-sm hover:bg-white/30 end-0 group focus:outline-none'
            onClick={nextSlide}>
            <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              {'>'}
              <span className='sr-only'>Next</span>
            </span>
          </button>
        </div>
      </div>
      <div className='col-span-3'>
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`flex gap-1 p-2 mb-2 ${
              idx === activeIdx ? 'rounded-sm bg-slate-200' : ''
            }`}>
            <img src={item.imgUrl} className='w-[64px] h-[52px] rounded-sm' />
            <p className='items-center justify-start'>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
