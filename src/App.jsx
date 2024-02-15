import { useState, useRef } from 'react';
import CreateBlog from './Components/CreateBlog';
import CardBlog from './Components/CardBlog';

function App() {
  const [blogs, setBlogs] = useState([]);
  const createBlogRef = useRef(null);
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
  function getTestData() {
    console.log(createBlogRef.current);
  }
  return (
    <>
      <div>
        <h3 className='font-semibold text-2xl bg-slate-100 text-slate-800 py-4'>
          <span className='font-bold text-3xl mx-1 text-emerald-500'>
            JDsatashi
          </span>
          Simple Blog App
        </h3>
      </div>
      <CreateBlog ref={createBlogRef} />
      <CardBlog />
      <button onClick={getTestData}>Test</button>
    </>
  );
}

export default App;
