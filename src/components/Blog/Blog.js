import React, { Component } from 'react';
import BlogEntry from '../BlogEntry/BlogEntry';
import {frontVsBackend, notJustCoding} from '../BlogArticles/BlogArticles'
//improt BlackTransition from '../BlackTransition'

class Blog extends Component {
    state = { 
     }
    render() { 
        return ( <div>
            <h1 className="project-title" id="links">{"Blog Archives"}</h1>
            <hr />
            <BlogEntry title={frontVsBackend.title} content={frontVsBackend.content}/>
            <BlogEntry title={notJustCoding.title} content={notJustCoding.content}/>

        </div> );
    }
}
 
export default Blog;