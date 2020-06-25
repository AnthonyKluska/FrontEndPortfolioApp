import React, { Component } from 'react';
import { Card, CardTitle, CardFooter, CardBody, Button, CardImg} from 'reactstrap';
import{ Link} from "react-router-dom";

const ShowFighter= ({fi})=>{
    console.log("showfighter "+ fi.pic)
    const wins =  fi.record.wins.koTko + fi.record.wins.submission + fi.record.wins.decision + fi.record.wins.DQ;
    const losses =  fi.record.losses.koTko + fi.record.losses.submission + fi.record.losses.decision + fi.record.losses.DQ;
    return(
        <div className="row">
            <Card className="col h-270">
                <CardTitle>
                    <h1>{fi.name}</h1>
                </CardTitle>
                <CardBody>
                    <CardImg width="2.00%" src={"/"+fi.pic}/>
                </CardBody>
                <CardFooter>
                    <ul>
                        <li><h4>Fighting out of:</h4> {fi.country}</li>
                        <li><h4>Weight:</h4> {fi.weight} lbs</li>
                        <li><h4>Record:</h4> {wins}-{losses}-{fi.record.draws}-{fi.record.noContests}</li>
                    </ul>
                </CardFooter>
            </Card>
            <Card className="col h-100">
                <CardTitle>
                    <h2>Fight History</h2>
                </CardTitle>
                <CardBody>
                    <ul>
                        <li><h4>Wins</h4></li>
                        <li>KO/TKOs: {fi.record.wins.koTko}</li>
                        <li>submissions: {fi.record.wins.submission}</li>
                        <li>Decisions: {fi.record.wins.decision}</li>
                        <li>Disqualificatons: {fi.record.wins.DQ}</li>

                        <li><h4>Losses</h4></li>
                        <li>KO/TKOs: {fi.record.losses.koTko}</li>
                        <li>submissions: {fi.record.losses.submission}</li>
                        <li>Decisions: {fi.record.losses.decision}</li>
                        <li>Disqualificatons: {fi.record.losses.DQ}</li>

                        <li><h4>Draws:</h4> {fi.record.draws}</li>
                        <li><h4>No Contests:</h4> {fi.record.noContests}</li>
                    </ul>
                </CardBody>
            </Card>
            
        </div>
    );
}

class FighterPage extends Component{

    render(){
        console.log("props", this.props)
        console.log("fighter", this.props.fighter, this.props.fighter.pic)
        return(
            <div>
                <ShowFighter fi={this.props.fighter}/>
                <Link to="/fightCard">
                    <Button color="secondary">Back to Fight Card</Button>
                    <Button color="primary" onClick= {()=> this.props.zeroBout()}>Back to Begining</Button>
                </Link>
            </div>
        )

    }
}

export default FighterPage;