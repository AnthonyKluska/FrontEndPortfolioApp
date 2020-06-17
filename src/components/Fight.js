import React, { Component } from 'react';
//import { render } from '@testing-library/react';
import{ NavLink} from "react-router-dom";
import { Card, CardImg, CardImgOverlay, CardTitle, Nav,} from 'reactstrap';


class Fight extends Component{

    render() {
        const selectbout = this.props.fightcard.map(bout => {
            const redCorner = this.props.fighters.filter((fighter)=>fighter.id===bout.redCorner)[0];
            const blueCorner = this.props.fighters.filter((fighter)=>fighter.id===bout.blueCorner)[0];
            return (
                <div key={bout.id} className="col">
                    <div className= "row">  
                        <Card className= " col-md-2" onClick={()=> this.props.viewFighter(bout.redCorner.id)}>
                            <Nav>
                                <NavLink to="/fightStats">
                                    <CardImg width="10.5%" src={redCorner.pic}/>
                                </NavLink>
                            </Nav>
                        </Card>
                        <Card className="col-md-2" onClick={()=> this.props.viewFighter(bout.blueCorner.id)}>
                            <Nav>
                                <NavLink to="/fightStats">
                                    <CardImg width="10.5%" src={blueCorner.pic}/>
                                </NavLink>
                            </Nav>
                        </Card>
                        <Card>
                            <CardImgOverlay>
                            <CardTitle>{redCorner.name} VS {blueCorner.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                </div>
            );
        });

        

        return (
            <div className="container">
                <div className="row">
                {selectbout[this.props.currentBout]}

                {/* <div onClick= {()=> this.props.viewFighter(this.props.fightcard[this.props.currentBout].redCorner.id)}>{redCornerImageCard[this.props.currentBout]}</div>
                
                <div onClick= {()=> this.props.viewFighter(this.props.fightcard[this.props.currentBout].blueCorner.id)}>{blueCornerImageCard[this.props.currentBout]}</div> */}
                
                {this.props.currentBout === 0? <div></div>: <button onClick= {()=> this.props.prevBout()}>Previous</button>}
                {this.props.currentBout >= selectbout.length - 1? <div></div>: <button onClick={()=> this.props.nextBout() }>Next</button>}
                </div>
            </div>
        );
        
    }
   
}

export default Fight;