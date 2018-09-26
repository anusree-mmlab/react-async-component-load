import {ON_MENU_CLICK} from '../actions/actionTypes';

const initialState = {
    is_sidemenu : true
}

const reducer = (state = initialState, action) => {
    console.log('TYPE=',action.type);
    switch(action.type) {
        case ON_MENU_CLICK:
        state = {
            ...state,
            is_sidemenu : !state.is_sidemenu
        } 
        // console.log(state)
        return state;
        default:
            return state;
    }
}

export default reducer;