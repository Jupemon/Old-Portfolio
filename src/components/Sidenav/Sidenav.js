import React, { Component } from 'react';
import './Sidenav.css';

class Sidenav extends Component {
    state = {  }

    scroll = () => {
        console.log("i work");
        window.scrollTo(0, -1000)
    }

    openNav() {
        this.refs.insvisible.style.display = "block";
        this.refs.title.style.display = "none";
        if (document.getElementById("mySidenav").style.width === "20px") {
            document.getElementById("mySidenav").style.width = "300px";
        }
    }

    closeNav() {
        this.refs.insvisible.style.display = "none";
        this.refs.title.style.display = "block"
        document.getElementById("mySidenav").style.width = "20px";
    }

    render() { 
        return ( <div>
            <div id="mySidenav" style={{width:"20px"}} className="sidenav" onMouseEnter={() => {this.openNav()}}>
            <p ref={"title"} className="navbar-title">Navigation</p>
                <div ref={"insvisible"} className="become-invisible"></div>
                <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
                <a href="#description">Description</a>
                <a href="#tools">Tools used</a>
                <a href="#functionality">Functionality</a>
                <a href="#whyCreateIt">Why create it?</a>
                <a href="#whatILearned">What i learned</a>
                <a href="#futurePlans">Future plans</a>
                <a href="#links">Links</a>
            </div>
        </div> );
    }
}
 
export default Sidenav;