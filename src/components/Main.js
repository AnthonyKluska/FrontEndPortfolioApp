import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect} from 'react-router-dom';
import Fight from './Fight'

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

        return(
            <div>
                <Switch>
                    <Route exact path='/fightCard' render={() => <Fight fightcard={this.props.fightCardState.fightCard} currentBout={this.state.currentBout} fighters={this.props.fighterState.fighters}/>} />
                    <Redirect to='/fightCard' />
                </Switch>
            </div>
        )
    }

}
export default connect(mapStateToProps) (Main);