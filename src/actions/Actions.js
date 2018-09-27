import {ON_MENU_CLICK, SIDE_MENU_CLICK} from './ActionTypes';

export const onMenuClick= () => {
    return {
        type : ON_MENU_CLICK
    }

}

export const onSideMenuClick= (menu) => {
    return {
        type : SIDE_MENU_CLICK,
        payload: menu
    }
}


