import { INCREMENT, DECREMENT } from './constants';

const intialState = {
    counter: 0
};

function counterReduxReducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default counterReduxReducer;