import { TOGGLE_COLOR } from './constants';

const initialState = {
    isToggleColor: false
};

function toggleColorReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_COLOR:
            return { ...state, isToggleColor: action.status };
        default:
            return state;
    };
}

export default toggleColorReducer;
