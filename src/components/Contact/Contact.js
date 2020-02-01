import React from 'react';
import './Contact.css'
const Contact = (props) => {
    return ( <div>
        <div id="mySidenav2" style={props.showContact ? {width:"350px"} : {width:"0px"}} className="sidenav2">
        <p className="navbar-title2">Navigation</p>
            
        <p style={{fontSize:"25px", color: "grey"}}>Juho Helin</p>
            <p style={{fontSize:"25px", color: "grey"}}>email : s6heju04@gmail.com</p>
            <p style={{fontSize:"25px", color: "grey"}}>phone : 050-435-1697</p>
        </div>
    </div> );
}
 
export default Contact;