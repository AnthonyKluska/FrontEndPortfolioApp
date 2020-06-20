import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Fight from './Fight'
import FighterPage from './FighterPage'

const mapStateToProps = state => {
    return {
        fighterState: state.fighters,
        fightCardState: state.fightCard
    };
}

class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            currentBout:0
        }
        this.prevBout = this.prevBout.bind(this);
        this.nextBout = this.nextBout.bind(this);
    }

    prevBout(){
        let {currentBout} = {...this.state}; 
        console.log(currentBout);
        this.setState({currentBout: currentBout-= 1});
    }
    nextBout(){
        let {currentBout} = {...this.state};
        console.log("the bout is" + currentBout); 
        this.setState({currentBout: currentBout += 1});
    }

    render() {

        const FighterWithId = ({match}) => {
            console.log("match", match, this.props.fighterState.fighters, match.params.fighterId);
            return (
                <FighterPage
                    fighter={this.props.fighterState.fighters.filter(fighters => fighters.id === +match.params.fighterId)[0]}
                />
                
            );
        }

        return(
            <div>
                <Switch>
                    <Route exact path='/' render={() => <Fight fightcard={this.props.fightCardState.fightCard} currentBout={this.state.currentBout} fighters={this.props.fighterState.fighters} prevBout={this.prevBout} nextBout = {this.nextBout}/>}  />
                    <Route exact path='/fighterpage' render={() => <FighterPage />} />
                    <Route path='/fighterpage/:fighterId' component={FighterWithId} />
                    <Redirect to='/' />
                </Switch>
            </div>
        )
    }

}
export default withRouter(connect(mapStateToProps) (Main));