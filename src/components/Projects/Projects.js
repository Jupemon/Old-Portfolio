import React from 'react';

const Projects = (props) => {
    return ( <div className="projects-holder" style={props.projects ? {height: "100%"}: {height: "0%", paddingTop:"0px"} }>
    <div className="section">
        <li onClick={()=> {props.changeRoute("candyLand")}}><a>Candy Town</a></li>
        <li onClick={()=> {props.changeRoute("planB")}}><a>Plan B</a></li>
        <li onClick={()=> {props.changeRoute("imageChecker")}}><a>Image Checker</a></li>
        <li onClick={()=> {props.changeRoute("devDocs")}}><a>DevDocs</a></li>
        <li onClick={()=> {props.changeRoute("LinkitTV")}}><a>LinkitTV</a></li>
    </div>
    </div> );
}
 
export default Projects