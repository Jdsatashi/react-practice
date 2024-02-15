import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
} from 'react';

const CreateBlog = forwardRef((props, ref) => {
  const [blogData, setBlogData] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  useEffect(() => {
    console.log(ref);
  }, [ref]);

  function handleSetBlogData(e) {
    e.preventDefault();
    let inputE = ref.current;
    console.log(inputE);
    if (title.trim() !== '' && content.trim() !== '') {
      setBlogData((_) => ({
        title: title,
        content: content,
        author: author,
      }));
      setTitle('');
      setContent('');
      setAuthor('');
    } else {
      inputValidate;
    }
  }
  function handleSetTitle(e) {
    setTitle(e.target.value);
  }
  function handleSetContent(e) {
    setContent(e.target.value);
  }
  function handleSetAuthor(e) {
    setAuthor(e.target.value);
  }
  function inputValidate() {}
  return (
    <>
      <div ref={ref} className='flex justify-center'>
        <div className='p-4 xl:px-12 xl:py-8 mt-4 xl:mt-8 bg-white rounded-none w-[480px] xl:rounded-md border-2 shadow-md'>
          <div className='flex justify-center'>
            <h2 className='font-bold font-serif text-2xl'>Create new blog</h2>
          </div>
          <form className='mt-4 mx-12'>
            <div className='mb-3 grid grid-cols-4'>
              <label className='flex items-center font-medium text-md'>
                Title
              </label>
              <input
                className='col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-gray-500 block w-full p-2.5'
                type='text'
                placeholder='Title'
                value={title}
                onChange={handleSetTitle}
              />
            </div>
            <div className='mb-3 grid grid-cols-4'>
              <label className='flex items-center font-medium text-md'>
                Content
              </label>
              <input
                className='col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-gray-500 block w-full p-2.5'
                type='text'
                placeholder='Content'
                value={content}
                onChange={handleSetContent}
              />
            </div>
            <div className='mb-3 grid grid-cols-4'>
              <label className='flex items-center font-medium text-md'>
                Author
              </label>
              <input
                className='col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-gray-500 block w-full p-2.5'
                type='text'
                placeholder='Author'
                value={author}
                onChange={handleSetAuthor}
              />
            </div>
            <div className='flex justify-center mt-3'>
              <button
                type='submit'
                onClick={handleSetBlogData}
                className='bg-green-500 py-2 px-4 hover:bg-emerald-500 rounded-md text-white text-medium font-serif'>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
});

CreateBlog.displayName = 'CreateBlog';

export default CreateBlog;
