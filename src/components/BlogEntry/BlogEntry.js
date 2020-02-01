import React, { Component } from 'react';
import './BlogEntry.css'

class BlogEntry extends Component {
    state = { 
        showArticle : false
     }

    showContent = (e) => {
        this.state.showArticle ? e.currentTarget.style.color = "white" : e.currentTarget.style.color = "green";
        this.setState({showArticle : !this.state.showArticle})
    }
    render() { 
        console.log(this.props)
        return ( <div style={{marginBottom:"250px"}}>
            <h4 onClick={(e) => {this.showContent(e)}}>{this.props.title}</h4>
            {this.state.showArticle ? <div>
            {this.props.content}
            </div> : null}
        </div> );
    }
}
 
export default BlogEntry;