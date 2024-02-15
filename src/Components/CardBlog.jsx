import React from 'react';

const CardBlog = () => {
  const blog = {
    title: 'First blog',
    content: 'What should I write?',
    author: 'JDsatashi',
  };
  return (
    <div>
      <div className='p-4 xl:px-12 xl:py-8 mt-4 xl:mt-8 bg-white rounded-none w-[480px] xl:rounded-md border-2 shadow-md'>
        <div className='text-2xl font-bold font-sans text-center'>
          {blog.title}
        </div>
        <div className='mt-3'>
          <div className='mx-8'>
            <p>{blog.content}</p>
          </div>
          <div className='mx-8'>
            <p className='text-end text-sm mx-4 font-thin text-slate-700'>
              {blog.author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
