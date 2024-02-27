import { useState, useEffect, useRef } from 'react';
import { Pic5, Pic3, Pic7, Pic8, Pic9, Pic10 } from '../utils/picUrl';
import '../styles/style.css';
import RightArrow from '../sgv/RightArrow';
import LeftArrow from '../sgv/LeftArrow';
const Carousel = () => {
  const data = [
    { title: 'This is the picture number One 1st.', imgUrl: Pic5 },
    { title: 'This is the picture number Two 2nd.', imgUrl: Pic3 },
    { title: 'This is the picture number Three 3rd.', imgUrl: Pic7 },
    { title: 'This is the picture number Four 4th.', imgUrl: Pic8 },
    { title: 'This is the picture number Fifth 5th.', imgUrl: Pic9 },
    { title: 'This is the picture number Sixth 6th.', imgUrl: Pic10 },
  ];
  const [activeIdx, setActiveIdx] = useState(0);
  const [timeInterval, setTimeInterval] = useState(5);
  const intervalRef = useRef(null);
  const slideRef = useRef(null);
  useEffect(() => {
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
          <div className='relative flex-col justify-center h-56 overflow-hidden rounded-lg md:h-96'>
            <div
              className='relative whitespace-normal transition-transform'
              style={{ transform: `translate(-${activeIdx * 100}%)` }}>
              <div className='flex w-full h-full' ref={slideRef}>
                {data.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.imgUrl}
                    alt={slide.title}
                    className='w-full h-full rounded-lg'
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Use dot location slide */}
          <div className='absolute z-40 flex space-x-3 -translate-x-1/2 shadow-md py-1 rounded-full px-1.5 lg:w-auto bottom-2 lg:bottom-4 left-1/2 rtl:space-x-reverse'>
            {data.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-6 h-6 rounded-full border-2 border-spacing-4 focus:outline-none ${
                  idx === activeIdx
                    ? 'bg-black hover:bg-slate-700'
                    : 'bg-gray-300 hover:bg-gray-500'
                }`}></button>
            ))}
          </div>
          {/* Use title for slide */}
          {/* <div className='absolute z-40 flex w-full space-x-3 -translate-x-1/2 shadow-md lg:py-1 lg:rounded-full lg:px-1.5 lg:w-auto backdrop-brightness-50 bottom-2 lg:bottom-4 left-1/2 rtl:space-x-reverse'>   */}
          {/* <h3 className='text-xl font-bold text-slate-200'>{active.title}</h3> */}
          {/* </div> */}
          <button
            type='button'
            className='carousel_btn start-0 rounded-s-lg element_center'
            onClick={prevSlide}>
            <span className='inline-flex items-center justify-center w-6 h-6 rounded-full lg:w-10 lg:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <LeftArrow className='w-4 h-4 text-white lg:w-6 lg:h-6 rtl:rotate-360' />
            </span>
          </button>
          <button
            type='button'
            className='carousel_btn end-0 rounded-e-lg element_center'
            onClick={nextSlide}>
            <span className='inline-flex items-center justify-center w-6 h-6 rounded-full lg:w-10 lg:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
              <RightArrow className='w-4 h-4 text-white lg:w-6 lg:h-6 rtl:rotate-180' />
            </span>
          </button>
        </div>
      </div>
      <div className='col-span-3 overflow-x-auto h-80 md:h-96 overscroll-auto focus:overscroll-contain'>
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
