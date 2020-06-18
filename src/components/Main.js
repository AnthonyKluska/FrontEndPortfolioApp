import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect} from 'react-router-dom';
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
    }


    render() {

        const FighterWithId = ({match}) => {
            return (
                <FighterPage
                    fighter={this.props.fighterState.fighters.filter(fighters => fighters.id === +match.params.figherId)[0]}
                    // this.props.fighters.filter((fighter)=>fighter.id===bout.redCorner)[0];
                />
            );
        }

        return(
            <div>
                <Switch>
                    <Route exact path='/fightCard' render={() => <Fight fightcard={this.props.fightCardState.fightCard} currentBout={this.state.currentBout} fighters={this.props.fighterState.fighters}/>} />
                    <Route exact path='/fighterpage' render={() => <FighterPage />} />
                    <Route path='/fighterpage/:fighterId' component={FighterWithId} />
                    <Redirect to='/fightCard' />
                </Switch>
            </div>
        )
    }

}
export default connect(mapStateToProps) (Main);