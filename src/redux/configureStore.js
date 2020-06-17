import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { fighters } from './fighters';
import{fightCard} from './fightcard'


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            fighters:fighters,
            fightCard: fightCard
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}