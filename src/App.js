import React, { Component } from 'react';
import './App.css';
import SideNav from './components/Sidenav/Sidenav';
import Project from './components/Projects/Project';
import Topnav from './components/Topnav/Topnav';
import Contact from './components/Contact/Contact';
import Bio from './components/Bio/Bio';
import Projects from './components/Projects/Projects';
import Skillscroll from './components/Skillscroll/Skillscroll';
import Intro from './components/Intro/Intro';
import Blog from './components/Blog/Blog';
import BlackTransition from './components/BlackTransition/BlackTransition';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showBio : true,
      projects : false,
      route : "",
      showContact: false,
      isItActive : true,

      childElements : []
    };
  }


  showBio = (e) => {
    e.target.classList.toggle("active");
    this.setState(prevState => ({
      ...prevState,
      showBio: !prevState.showBio
    }))
  }

  changeRoute = (route, e) => {
    if (this.state.route !== route && e) {
      e.target.classList.toggle("active");
    }
    
    this.setState({route: route})
  }

  showProjects = (e) => {
    e.target.classList.toggle("active");
    this.setState(prevState => ({
      ...prevState,
      projects: !prevState.projects
    }))
  }

  toggleContact = () => {
    this.setState(prevState => ({
      ...prevState,
      showContact: !prevState.showContact
    }))

  }



  render() {
    return (
      <div className="App">
      <BlackTransition />
      <Contact showContact={this.state.showContact}/>
      {this.state.route.length > 0 && this.state.route !== "Blog" ? <SideNav /> : null}
      <Topnav toggleContact={this.toggleContact} route={this.state.route} showContact={this.state.showContact} changeRoute={this.changeRoute} showProjects={this.showProjects} showBio={this.showBio}/>
      {this.state.route === "Blog" ? <Blog /> : 
      <Project route={this.state.route}/>
      }
      {this.state.route==="" ? <Intro /> : null}
      {this.state.showBio ? <Bio /> : null}
        <Projects changeRoute={this.changeRoute} projects={this.state.projects}/>
      </div>
    );
  }

}

export default App;
