
/* Actions */
export const changeColor = (color) => {

    return {
        type: 'CHANGE_COLOR',
        color
    }
    
}

/* Reducers */
export const colorReducer = ( state = '', action ) => {

     if (action.type == 'CHANGE_COLOR') return action.color;

     return state;

}
