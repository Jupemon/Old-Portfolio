import React, { Component } from 'react';

class BlackTransition extends Component {
    state = {  }

    blackTransition = (e) => {

    }

    componentDidMount(props) {
        console.log(props, "HEIOTHAETOEHI")
    }
    
    render() { 
        return ( <div
        style={{
        backgroundColor : "black",
        width:"100%",
        height:"70%",
        position: "fixed",
        left:"100%"
        
    }}>>
            
        </div> );
    }
}
 
export default BlackTransition;