import React, { Component } from 'react';
import './Bio.css'
import Skillscroll from '../Skillscroll/Skillscroll';

class Bio extends Component {
    constructor() {
      super();
      this.state = {
          hovering : false,
          skill : ["React", "Postgres", "Google API", "Github", "Css", "HTML", "Javascript", "Greatness"],
          skillInterval : () => {
            setTimeout(() => {
                const skill = this.state.skill
                console.log("HI")
                skill.push(skill.shift())
                this.setState({skill})
            }, 3000);
          }
      };
    }

    DestroyElement = () => {
        this.state.skillInterval()
    }
    
    componentWillUnmount() {
        const skillInterval = this.state.skillInterval;
        
        clearInterval(this.state.skillInterval)
    }

    componentDidMount() {
        console.log("rendered")
        //setInterval(() => {this.DestroyElement()}, 1000);
    }
    render() {
    return ( <div className="bio">
            <Skillscroll />
    </div> );
        }
}
 
export default Bio;