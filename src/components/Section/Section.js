import React from 'react';
import './Section.css';
import BackgroundImage from '../Backgroundimage/Backgroundimage';

const Section = (props) => {
    return ( <div>
        <BackgroundImage image={props.img} />
        <div className="section-box">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    </div> );
}
 
export default Section;