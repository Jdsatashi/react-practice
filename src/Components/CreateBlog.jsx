/* eslint-disable no-unused-vars */
import React, {
    forwardRef,
    useState,
    useImperativeHandle,
    useRef,
} from 'react';
import InputE from "./InputE.jsx";

// Component
const CreateBlog = forwardRef((props, ref) => {
    // States group
    const [blogData, setBlogData] = useState({});
    // Refs group
    const inputRef = useRef()
    const cardRef = useRef()
    // Variables group
    const groupClass = 'mb-3'
    const labelClass = 'input_label'
    const inpClass = 'input_text'
    const fields = [
        {name: 'title', inpType: 'text'},
        {name: 'content', inpType: 'text'},
        {name: 'author', inpType: 'text'}
    ]
    // Ref declarations
    useImperativeHandle(ref, () => ({
        element: cardRef.current,
        newBlog: () => blogData,
    }))
    // Functions group
    const handleSetBlogData = (e) => {
        e.preventDefault()
    }
    const handleInputChange = (name, value) => {
        setBlogData((data) => ({
            ...data,
            [name]: value,
        }));
    };
    // HTML Elements
    return (
        <div ref={cardRef} className='flex justify-center'>
            <div className='card_simple'>
                <div className='flex justify-center'>
                    <h2 className='card_title'>Create new blog</h2>
                </div>
                <form className='mt-4 mx-12'>
                    {fields.map((field, idx) => (
                        <InputE key={idx} name={field.name} groupClass={groupClass} labelClass={labelClass}
                                onInputChange={handleInputChange}
                                inpType={field.inpType} inpClass={inpClass}/>
                    ))}
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
    );
});

CreateBlog.displayName = 'CreateBlog';

export default CreateBlog;
