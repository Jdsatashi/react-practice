import { useState, useRef, createContext, useEffect } from 'react';
import CreateBlog from './Components/CreateBlog';
import CardBlog from './Components/CardBlog';

function App() {
  const createBlogRef = useRef(null);
  const [blogs, setBlogs] = useState([]);
  const sampleBlog = [
    {
      title: 'First blog',
      content: 'What should I write?',
      author: 'JDsatashi',
    },
    {
      title: 'Second blog',
      content: 'I think about content we talk',
      author: 'Anonymous',
    },
    {
      title: 'Third blog',
      content: 'So what is it, explained please!',
      author: 'John Deen',
    },
  ];
  useEffect(() => {
    setBlogs((_) => sampleBlog);
  }, []);
  function getTestData() {
    console.log(blogs);
    console.log(createBlogRef.current.newBlog());
  }
  return (
    <>
      <div>
        <h3 className='py-4 text-2xl font-semibold bg-slate-100 text-slate-800'>
          <span className='mx-1 text-3xl font-bold text-emerald-500'>
            JDsatashi
          </span>
          Simple Blog App
        </h3>
      </div>
      <div>
        <CreateBlog blogs={blogs} ref={createBlogRef} />
      </div>
      {blogs.map((blog, idx) => (
        <CardBlog key={idx} blog={blog} />
      ))}
      <button className='btn_green' onClick={getTestData}>
        Test
      </button>
    </>
  );
}

export default App;
