export const fetchMenu = menuId => {
    return $.ajax({
        method: 'GET',
        url: `api/menus/${menuId}`
    })
}