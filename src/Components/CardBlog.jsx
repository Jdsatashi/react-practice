import React, { useContext } from 'react';
import PropTypes from 'prop-types';

const CardBlog = ({ blog }) => {
  return (
    <div>
      <div className='p-4 xl:px-12 xl:py-8 mt-4 xl:mt-8 bg-white rounded-none w-[480px] xl:rounded-md border-2 shadow-md'>
        <div className='font-sans text-2xl font-bold text-center'>
          {blog.title}
        </div>
        <div className='mt-3'>
          <div className='mx-8'>
            <p>{blog.content}</p>
          </div>
          <div className='mx-8'>
            <p className='mx-4 text-sm font-thin text-end text-slate-700'>
              {blog.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CardBlog.propTypes = {
  blog: PropTypes.object,
};

export default CardBlog;
