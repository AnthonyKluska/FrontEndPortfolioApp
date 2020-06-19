import React, { Component } from 'react';
// import{ NavLink} from "react-router-dom";
//import{ Link} from "react-router-dom";

class FighterPage extends Component{

   
    
    render(){
        console.log("fighter info", this.props.fighter.name);
        return(
        // <div>FighterPage {this.props.fighterInfo.name}</div>
        <div>FighterPage {this.props.fighter.name}</div>
        );
    }

}

export default FighterPage;