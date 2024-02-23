import { useState, useEffect, useRef } from 'react';
import { Pic1, Pic2, Pic3, Pic4 } from '../utils/picUrl';
import '../styles/style.css';
import RightArrow from '../sgv/RightArrow';
import LeftArrow from '../sgv/LeftArrow';
const Carousel = () => {
  const data = [
    { title: 'This is the picture number One 1st.', imgUrl: Pic1 },
    { title: 'This is the picture number Two 2nd.', imgUrl: Pic2 },
    { title: 'This is the picture number Three 3rd.', imgUrl: Pic3 },
    { title: 'This is the picture number Four 4th.', imgUrl: Pic4 },
  ];
  const [activeIdx, setActiveIdx] = useState(0);
  const [active, setActive] = useState(data[0]);
  const [timeInterval, setTimeInterval] = useState(5);
  const intervalRef = useRef(null);
  useEffect(() => {
    setActive((_) => data[activeIdx]);
    setTimeInterval(5);
  }, [activeIdx]);
  useEffect(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTimeInterval((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            return 5;
          }
        });
      }, 1000);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  useEffect(() => {
    if (timeInterval === 0) {
      nextSlide();
    }
  }, [timeInterval]);
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
    <div className='grid grid-cols-1 mx-4 lg:gap-2 lg:grid-cols-10 lg:mx-16'>
      <div
        className='mb-2 lb:mb-0 lg:col-span-7'
        onMouseOver={() => console.log('Hover')}>
        <div className='relative w-full'>
          <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
            <div className='duration-700 ease-in-out'>
              <img
                src={active.imgUrl}
                alt=''
                className='absolute block w-full h-full duration-700 ease-in-out -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 image_transition'
              />
            </div>
          </div>
          <div className='absolute z-40 flex w-full space-x-3 -translate-x-1/2 shadow-md lg:py-1 lg:rounded-sm lg:px-4 lg:w-auto backdrop-brightness-50 bottom-2 lg:bottom-4 left-1/2 rtl:space-x-reverse'>
            {/* Use dot location slide */}
            {/* {data.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-6 h-6 rounded-full border-2 border-spacing-4 m-1 focus:outline-none ${
                  idx === activeIdx
                    ? 'bg-black hover:bg-slate-700'
                    : 'bg-gray-300 hover:bg-gray-500'
                }`}></button>
            ))} */}
            {/* Use title for slide */}
            <h3 className='text-xl font-bold text-slate-200'>{active.title}</h3>
          </div>
          <button
            type='button'
            className='absolute top-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer lg:px-4 hover:backdrop-brightness-50 rounded-s-md hover:bg-white/30 start-0 group focus:outline-none'
            onClick={prevSlide}>
            <span className='inline-flex items-center justify-center w-6 h-6 rounded-full lg:w-10 lg:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <LeftArrow className='w-4 h-4 text-white lg:w-6 lg:h-6 rtl:rotate-360' />
            </span>
          </button>
          <button
            type='button'
            className='absolute top-0 z-30 flex items-center justify-center h-full px-2 cursor-pointer lg:px-4 hover:backdrop-brightness-50 rounded-e-md hover:bg-white/30 end-0 group focus:outline-none'
            onClick={nextSlide}>
            <span className='inline-flex items-center justify-center w-6 h-6 rounded-full lg:w-10 lg:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <RightArrow className='w-4 h-4 text-white lg:w-6 lg:h-6 rtl:rotate-180' />
            </span>
          </button>
        </div>
      </div>
      <div className='col-span-3'>
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`flex gap-1 p-2 mb-2 cursor-pointer ${
              idx === activeIdx ? 'rounded-sm bg-slate-200' : ''
            }`}
            onClick={() => setActiveIdx(idx)}>
            <img src={item.imgUrl} className='w-[64px] h-[52px] rounded-sm' />
            <p className='items-center justify-start'>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
