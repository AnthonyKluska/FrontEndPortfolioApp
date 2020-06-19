import React, { Component } from 'react';
//import { render } from '@testing-library/react';
import{ Link} from "react-router-dom";
import { Card, CardImg, CardTitle, Nav, CardBody, CardFooter,} from 'reactstrap';


class Fight extends Component{

    constructor(props){
        super(props);
            console.log("test render");
    }

    render() {
        console.log("refresh", this.state)
        const selectbout = this.props.fightcard.map(bout => {
            const redCorner = this.props.fighters.filter((fighter)=>fighter.id===bout.redCorner)[0];
            const blueCorner = this.props.fighters.filter((fighter)=>fighter.id===bout.blueCorner)[0];
            return (
                <div key={bout.id} className="col">
                    <div className= "row">  
                        <Card className= " col-md-2">
                        <CardTitle>{redCorner.name}</CardTitle>
                            <Nav>
                                <Link to={`/fighterpage/${redCorner.id}`}>
                                    <CardImg width="10.5%" src={redCorner.pic}/>
                                </Link>
                            </Nav>
                        </Card>
                        <Card className="col-md-2">
                        <CardTitle> {blueCorner.name}</CardTitle>
                            <Nav>
                                {/* THIS PART IS CORRECT. IT REFERES TO AN ARRAY OF OBJECTS CALLED 'EXPORT CONST FIGHTER[]' AND WHEN IT IS CLICK WHAT EVER THE ID IS GETS REFERENCED IN THE FIGERPAGE.JS AFTER THE APP ROUTS TO IT IN THE MAIN COMPONENT */}
                                <Link to={`/fighterpage/${blueCorner.id}`}>
                                    <CardImg width="10.5%" src={blueCorner.pic}/>
                                </Link>
                            </Nav>
                            <CardFooter>
                                <ul>
                                    <li>bout.</li>
                                </ul>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            );
        });

        

        return (
            <div className="container">
                <Card>
                    <CardBody>
                        {selectbout[this.props.currentBout]}
                    </CardBody>
                    <CardFooter>
                        {this.props.currentBout === 0? <div></div>: <button onClick= {()=> this.props.prevBout()}>Previous</button>}
                        {this.props.currentBout >= selectbout.length - 1? <div></div>: <button onClick={()=> this.props.nextBout() }>Next</button>}
                    </CardFooter>
                </Card>
            </div>
        );
        
    }
   
}

export default Fight;