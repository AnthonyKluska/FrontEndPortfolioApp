import * as ActionTypes from './ActionTypes';
import{FIGHTCARD} from '../shared/fight-card'

export const fightCard = (state = { errMess: null, fightCard: FIGHTCARD}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        

        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.comments.length;
            return {...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
};