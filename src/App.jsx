import { useState, useEffect } from 'react';
import CreateBlog from './Components/CreateBlog';
import CardBlog from './Components/CardBlog';

function App() {
  // Get storage
  const storageBlogs = JSON.parse(localStorage.getItem('blogs'))
  // State
  const [blogs, setBlogs] = useState(storageBlogs ?? []);
  // Effect funtions
  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  // Functions
  function addBlog(data){
    setBlogs((blogs) => [...blogs, data])
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
      <CreateBlog blogs={blogs} createBlog={addBlog}/>
      {blogs.map((blog, idx) => (
        <CardBlog key={idx} blog={blog} />
      ))}
    </>
  );
}

export default App;
