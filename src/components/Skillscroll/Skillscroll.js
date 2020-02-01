import React, { Component } from 'react';
import './Skillscroll.css'


// logos
import reactLogo from '../../images/logos/react.png';
import postgreslogo from '../../images/logos/postgres.png';
import knexlogo from '../../images/logos/knex.png';
import nodejslogo from '../../images/logos/nodejs.png';
import bootstraplogo from '../../images/logos/bootsrap.png';
import expresslogo from '../../images/logos/express.png';
import gitLogo from '../../images/logos/git.png';
import githubLogo from '../../images/logos/github.png';
import html5 from '../../images/logos/html5.png';
import css3 from '../../images/logos/css3.png';
import javascript from '../../images/logos/javascript.png';
import cSharp from '../../images/logos/csharp.png';
/*
import reactLogo from '../../images/logos/react.png';
import reactLogo from '../../images/logos/react.png';
import reactLogo from '../../images/logos/react.png';
import reactLogo from '../../images/logos/react.png';
*/
class Skillscroll extends Component {

    constructor() {
        super();
        this.state = {
            childElementCount : 0,
            testLog : console.log("hi"),
            intervalFunc : setInterval(this.ScrollingSkills, 4000)
         }
    }

     componentWillUnmount() {
         console.log("unmount")
         this.handleInterval(false)
         const intervalFunc = this.state.intervalFunc;
         clearInterval(intervalFunc);
     }


     handleInterval = (active) => {

         if (active) {
            setInterval(this.ScrollingSkills, 2000)
         }
         else {
            clearInterval(this.ScrollingSkills)
         }
     }

     componentDidMount() {
         console.log("mounting")
         const timer = 4000;
         const i = this.state.childElementCount;

         document.querySelector('#c').childNodes[i].classList.add('active')
         document.querySelector('#c').childNodes[i].style.left = '0'
     
         document.querySelector('#c').childNodes[i + 1].classList.add('active')
         document.querySelector('#c').childNodes[i + 1].style.left = '25%'
     
         document.querySelector('#c').childNodes[i + 2].classList.add('active')
         document.querySelector('#c').childNodes[i + 2].style.left = '50%'
     
         document.querySelector('#c').childNodes[i + 3].classList.add('active')
         document.querySelector('#c').childNodes[i + 3].style.left = '75%'

         console.log(this.state)
         
     }

     ScrollingSkills = () => {
        console.log("scroll")
        let i = this.state.childElementCount;

        const max = document.querySelector('#c').childElementCount;

         for (let index = 0; index < document.querySelector('#c').childElementCount; index++) {
             //const element = document.querySelector('#c').childElementCount[index];
             document.querySelector('#c').childNodes[index].classList.remove('active')
         }

        document.querySelector('#c').childNodes[i].style.transitionDelay = "0.25s";
        document.querySelector('#c').childNodes[i + 1].style.transitionDelay = "0.5s"
        document.querySelector('#c').childNodes[i + 2].style.transitionDelay = "0.75s"
        document.querySelector('#c').childNodes[i + 3].style.transitionDelay = "1s"
         

        if (i < max-4) {
            i = i+4
            this.setState({childElementCount : i})
        }
        else { // no more new children
            i = 0
            this.setState({childElementCount : i})
        }
        document.querySelector('#c').childNodes[i].style.transitionDelay = "1.25s";
        document.querySelector('#c').childNodes[i].style.left = "0px"
        document.querySelector('#c').childNodes[i].classList.add('active')

        document.querySelector('#c').childNodes[i + 1].style.transitionDelay = "1.5s"
        document.querySelector('#c').childNodes[i + 1].style.left = "25%"
        document.querySelector('#c').childNodes[i + 1].classList.add('active')

        document.querySelector('#c').childNodes[i + 2].style.transitionDelay = "1.75s"
        document.querySelector('#c').childNodes[i + 2].style.left = "50%"
        document.querySelector('#c').childNodes[i + 2].classList.add('active')

        document.querySelector('#c').childNodes[i + 3].style.transitionDelay = "2s"
        document.querySelector('#c').childNodes[i + 3].style.left = "75%"
        document.querySelector('#c').childNodes[i + 3 ].classList.add('active')
      }

    render() { 
        return (<div className="skills-roster">
        <div className="skills-title">
            <hr/>
        </div>
            <ul id="c">
            <li className="skill-holder"><p><strong><img className="skill-logo" alt="react logo" src={reactLogo}/></strong></p><p>React</p></li>
            <li className="skill-holder"><p><strong><img className="skill-logo" alt="react logo" src={postgreslogo}/></strong></p><p>PostgreSQL</p></li>
            <li className="skill-holder"><p><strong><img className="skill-logo" alt="react logo" src={knexlogo}/></strong></p><p>Knex</p></li>
            <li className="skill-holder"><p><strong><img className="skill-logo" alt="react logo" src={nodejslogo}/></strong></p><p>Node</p></li>

            <li className="skill-holder"><p><strong><img className="skill-logo" alt="react logo" src={bootstraplogo}/></strong></p><p>Bootsrap</p></li>
            <li className="skill-holder"><p><strong><img className="skill-logo" alt="react logo" src={expresslogo}/></strong></p><p>Express</p></li>
            <li className="skill-holder"><p><strong><img className="skill-logo" alt="react logo" src={gitLogo}/></strong></p><p>Git</p></li>
            <li className="skill-holder"><p><strong><img className="skill-logo" alt="react logo" src={githubLogo}/></strong></p><p>Github</p></li>

            <li className="skill-holder"><p><strong><img className="skill-logo" alt="react logo" src={javascript}/></strong></p><p>Javascript</p></li>
            <li className="skill-holder"><p><strong><img className="skill-logo" alt="react logo" src={css3}/></strong></p><p>Css</p></li>
            <li className="skill-holder"><p><strong><img className="skill-logo" alt="react logo" src={html5}/></strong></p><p>Html</p></li>
            <li className="skill-holder"><p><strong><img className="skill-logo" alt="react logo" src={cSharp}/></strong></p><p>C#</p></li>
    
        </ul>
        </div>
        );
    }
}
 
export default Skillscroll;