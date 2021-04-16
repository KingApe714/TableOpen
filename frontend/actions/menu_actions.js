import * as MenuAPIUtil from '../util/menu_util';

export const RECEIVE_MENU = 'RECEIVE_MENU';

const receiveMenu = (menu) => ({
    type: RECEIVE_MENU,
    menu
})

export const fetchMenu = (menuId) => dispatch => (
    MenuAPIUtil.fetchMenu(menuId)
        .then(menu => dispatch(receiveMenu(menu)))
)