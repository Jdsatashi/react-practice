/* eslint-disable no-unused-vars */
import React, {
    useState,
    useEffect,
} from 'react';
import PropTypes from 'prop-types';
import InputE from './InputE.jsx';

// Variables group
const groupClass = 'mb-3';
const labelClass = 'input_label';
const inpClass = 'input_text';
const fields = [
    {name: 'title', inpType: 'text'},
    {name: 'content', inpType: 'text'},
    {name: 'author', inpType: 'text'},
];
// Default state data
const blogDataDefault = {
  title: '',
  content: '',
  author: 'Anonymous',
}
const errorDefault = {title: '', content: '', author: ''}

// Component
const CreateBlog = (props) => {
    // States group
    const [blogData, setBlogData] = useState(blogDataDefault);
    const [blogs, setBlogs] = useState(props.blogs);
    const [errors, setErrors] = useState(errorDefault);
    // Context
    useEffect(() => setBlogs(props.blogs), [props]);
    // Functions group
    const handleSetBlogData = (e) => {
        e.preventDefault();
        // Validate fields data
        switch (true) {
            case blogData.title.trim() === '':
                setErrors((err) => ({...err, title: 'Title cannot be blank'}));
                break;
            case blogData.content.trim() === '':
                setErrors((err) => ({...err, content: 'Content cannot be blank'}));
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
                props.createBlog(blogData)
                setBlogData(blogDataDefault)
                console.log(blogs);
        }
    };
    const handleInputChange = (name, value) => {
        setBlogData((data) => ({
            ...data,
            [name]: value,
        }));
        setErrors((err) => ({...err, [name]: ''}));
    };
    // HTML Elements
    return (
        <div className='flex justify-center'>
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
};

CreateBlog.propTypes = {
    blogs: PropTypes.array,
    createBlog: PropTypes.func,
};

export default CreateBlog;
