import React from 'react';
import './Backgroundimage.css';

const BackgroundImage = (props) => {
    return ( 
    <div className="landing" id={props.id}>
        <div className="home-wrap">
            <div className="home-inner" style={{backgroundImage:`url(${props.img})`}}>
            </div>
        <div className="test-section">
            <h1>{props.title}</h1>
            {props.content}
        </div>
        </div>


    </div> );
}
 
export default BackgroundImage;

/*        <div className="caption text-center">
        <h1>{props.title}</h1>
        {props.content}
        </div> */