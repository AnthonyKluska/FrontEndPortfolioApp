import React, { Component } from 'react';
//import { render } from '@testing-library/react';
import{ Link} from "react-router-dom";
import { Card, CardImg, CardTitle, Nav, CardBody, CardFooter,Row, Col} from 'reactstrap';


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
            const winner = this.props.fighters.filter((fighter)=>fighter.id===bout.winner)[0];

            function fightName(i){
                var x = i;
                switch (x) {
                    case 5: 
                    return "Main Event"; 
                    case 4:
                    return "Co-Main Event";
                    default: 
                    return  null; 
                }
            }
            return (
                <div key={bout.id}>
                    <Card>
                        <CardTitle>
                            <h1>UFC {bout.weightclass} Bout</h1>
                            <br/>
                            <h3>{fightName(bout.fightPosition)}</h3> 
                        </CardTitle>
                    
                        <CardBody className= "row">
                                <Card className= ".col-sm-12 .col-md-4 .offset-md-3">
                                <CardTitle><h3>{redCorner.name}</h3></CardTitle>
                                <CardBody>
                                    <Nav>
                                        <Link to={`/fighterpage/${redCorner.id}`}>
                                            <CardImg width="8.5%" src={redCorner.pic}/>
                                        </Link>
                                    </Nav>
                                </CardBody> 
                            </Card>
                            <Card className= ".col-sm-12 .col-md-4 .offset-md-3">
                                <CardTitle><h3>{blueCorner.name}</h3></CardTitle>
                                <CardBody>
                                    <Nav>
                                        <Link to={`/fighterpage/${blueCorner.id}`}>
                                            <CardImg width="8.5%" src={blueCorner.pic}/>
                                        </Link>
                                    </Nav>
                                </CardBody> 
                            </Card>
                        </CardBody>
                        <CardFooter>
                            <ul>
                                <li><h4>Winner: {winner.name}</h4></li>
                                <li>Method: {bout.method}</li>
                                <li>Time: {bout.time.clock} Round: {bout.time.round}</li>
                            </ul>
                        </CardFooter>
                    </Card>
                </div>
                
            );
        });

        

        return (
            <div className="container">
                <Row>
                    <Col md-12>
                        {selectbout[this.props.currentBout]}
                    </Col>
                </Row>
                <Row>
                    <Col mx-auto>
                        {this.props.currentBout === 0? <div></div>: <button onClick= {()=> this.props.prevBout()}>Previous</button>}
                        {this.props.currentBout >= selectbout.length - 1? <div></div>: <button onClick={()=> this.props.nextBout() }>Next</button>}
                    </Col>
                </Row>
            </div>
        );
        
    }
   
}

export default Fight;