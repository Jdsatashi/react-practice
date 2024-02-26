import { useState } from 'react';
import { Pic1, Pic2, Pic3, Pic4 } from '../utils/picUrl';
import Carousel2Item from './Carousel2Item';
import LeftArrow from '../sgv/LeftArrow';
import RightArrow from '../sgv/RightArrow';

const Carousel2 = () => {
  const data = [
    { title: 'This is the picture number One 1st.', imgUrl: Pic1 },
    { title: 'This is the picture number Two 2nd.', imgUrl: Pic2 },
    { title: 'This is the picture number Three 3rd.', imgUrl: Pic3 },
    { title: 'This is the picture number Four 4th.', imgUrl: Pic4 },
  ];
  const [activeIdx, setActiveIdx] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= data.length) {
      newIndex = data.length - 1;
    }

    setActiveIdx(newIndex);
  };
  return (
    <div className='carousel'>
      <div
        className='inner'
        style={{ transform: `translate(-${activeIdx * 100}%)` }}>
        {data.map((slide, idx) => (
          <Carousel2Item key={idx} data={slide} />
        ))}
      </div>
      <div className='flex items-center justify-center mt-4'>
        <div className='inline-flex items-center justify-center w-6 h-6 -mt-1 rounded-full me-2 lg:w-6 lg:h-6 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <LeftArrow className='w-4 h-4 cursor-pointer' />
        </div>
        <div className='mx-1'>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`w-6 h-6 mx-1 border-2 rounded-full border-spacing-4 focus:outline-none ${
                  index === activeIdx
                    ? 'bg-black hover:bg-slate-700'
                    : 'bg-gray-300 hover:bg-gray-500'
                }`}
                onClick={() => {
                  updateIndex(index);
                }}></button>
            );
          })}
        </div>
        <div className='inline-flex items-center justify-center w-6 h-6 -mt-1 rounded-full ms-2 lg:w-6 lg:h-6 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <RightArrow className='w-4 h-4 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
