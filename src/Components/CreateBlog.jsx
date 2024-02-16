/* eslint-disable no-unused-vars */
import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useRef,
  useContext,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import InputE from './InputE.jsx';

// Component
const CreateBlog = forwardRef((props, ref) => {
  // States group
  const [blogData, setBlogData] = useState({
    title: '',
    content: '',
    author: 'Anonymous',
  });
  const [blogs, setBlogs] = useState(props.blogs);
  const [errors, setErrors] = useState({ title: '', content: '', author: '' });
  // Refs group
  const cardRef = useRef();
  // Context
  useEffect(() => setBlogs(props.blogs), [props]);
  // Variables group
  const groupClass = 'mb-3';
  const labelClass = 'input_label';
  const inpClass = 'input_text';
  const fields = [
    { name: 'title', inpType: 'text' },
    { name: 'content', inpType: 'text' },
    { name: 'author', inpType: 'text' },
  ];
  // Ref declarations
  useImperativeHandle(ref, () => ({
    element: cardRef.current,
    newBlog: () => blogData,
  }));
  // Functions group
  const handleSetBlogData = (e) => {
    e.preventDefault();
    switch (true) {
      case blogData.title.trim() === '':
        setErrors((err) => ({ ...err, title: 'Title cannot be blank' }));
        break;
      case blogData.content.trim() === '':
        setErrors((err) => ({ ...err, content: 'Content cannot be blank' }));
        break;
      case blogData.content.length <= 10:
        setErrors((err) => ({
          ...err,
          content: 'Content must more 10 characters',
        }));
        break;
      case blogs.some((blog) => blog.title === blogData.title) === true:
        setErrors((err) => ({
          ...err,
          title: 'Title had existed, try another',
        }));
        break;
      default:
        setBlogs((blogs) => [...blogs, blogData]);
        console.log(blogs);
    }
    console.log(blogs);
  };
  const handleInputChange = (name, value) => {
    setBlogData((data) => ({
      ...data,
      [name]: value,
    }));
    setErrors((err) => ({ ...err, [name]: '' }));
  };
  // HTML Elements
  return (
    <div ref={cardRef} className='flex justify-center'>
      <div className='card_simple'>
        <div className='flex justify-center'>
          <h2 className='card_title'>Create new blog</h2>
        </div>
        <form className='mx-12 mt-4'>
          {fields.map((field, idx) => (
            <InputE
              key={idx}
              name={field.name}
              inpType={field.inpType}
              groupClass={groupClass}
              labelClass={labelClass}
              inpClass={inpClass}
              value={blogData[field.name]}
              errors={errors[field.name]}
              onInputChange={handleInputChange}
            />
          ))}
          <div className='flex justify-center mt-3'>
            <button
              type='submit'
              onClick={handleSetBlogData}
              className='btn_green'>
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});

CreateBlog.displayName = 'CreateBlog';
CreateBlog.propTypes = {
  blogs: PropTypes.array,
};

export default CreateBlog;
