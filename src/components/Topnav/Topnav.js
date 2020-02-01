import React from 'react';
import './Topnav.css';



const Topnav = (props) => {
    return (
        <div id="navbar">
        <a id="logo" onClick={() => {props.changeRoute("")}}>Juho Helin</a>
        <div id="navbar-right">
        <a onClick={(e) => props.showProjects(e)}>Projects</a>
          {props.showContact ? <a onClick={()=> {props.toggleContact()}} className="active" >Contact</a> : <a onClick={()=> {props.toggleContact()}}>Contact</a>}
          <a className="active" onClick={(e) => props.showBio(e)}>Skills</a>
          <a className={props.route === "Blog" ? "active" : ""} onClick={(e) => props.changeRoute("Blog")}>Blog</a>
        </div>
        
      </div>);
}
 
export default Topnav;