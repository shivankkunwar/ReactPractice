import React ,{useState}from "react";
import './BlogList.css';
function BlogList(){
        const [blogs, setBlogs]= useState([
            {title:'First Blog ',body:'lorem ipsum...', author:'shivank',id:1},
            {title:'Web dev tutorial',body:'lorem ipsum...', author:'yoshi',id:2},
            {title:'Note',body:'lorem ipsum...', author:'taleb',id:3},
            {title:'last blog ',body:'lorem ipsum...', author:'shivank',id:4}

        ])
        return(
            <div className="blog_div">
                {
                (blogs).map((blog)=>{

                    return (
                        <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                    )
                   
                })

                }

            </div>
        )
}
export default BlogList;