import React, { createContext, useReducer } from 'react';

/* Creating a reducer */

/*
The useReducer hook also can be used to update state, 
but it does so in a more sophisticated way: it accepts a reducer function and an initial state, 
and it returns the actual state and a dispatch function. The dispatch function alters state 
in an implicit way by mapping actions to state transitions
*/
const Reducer = ( state = '', action ) => {

     if (action.type == 'CHANGE_COLOR') return action.color;

     return state;

}



/* Creating a store */

const initialState = '';

export const Context = createContext(initialState);

export const Store = ({children}) => {
    
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

