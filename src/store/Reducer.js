import {ON_MENU_CLICK, SIDE_MENU_CLICK} from '../actions/ActionTypes';

const initialState = {
    is_sidemenu : true,
    menu_name: 'branches'
}

const reducer = (state = initialState, action) => {
    console.log('TYPE=',action);
    switch(action.type) {
        case ON_MENU_CLICK:
            state = {
                ...state,
                is_sidemenu : !state.is_sidemenu
            } 
            return state;

        case SIDE_MENU_CLICK:
            state = {
                ...state,
                menu_name : action.payload
            } 
            return state;
        
        default:
            return state;
    }
}

export default reducer;