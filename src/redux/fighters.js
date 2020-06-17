import * as ActionTypes from './ActionTypes';
import{FIGHTER} from '../shared/fighter'

export const fighters = (state = { errMess: null, fighters: FIGHTER}, action) => {
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