import React, { useContext } from 'react';
import { Context } from './../context'


/****************************************************************************************** */

export const Man_3 = () => {

    const [state, dispatch] = useContext(Context);

  return (
    <div className="container" style={{backgroundColor: (state) ?  state : '#f6f7b2'}} >
      <span>Hello I'm Arnold</span>
      <button onClick={() => dispatch({type: 'CHANGE_COLOR', color: '#f6f7b2'})}>Stay Yellow</button>
    </div>
  );
}

/* ***************************************************************************************** */

export const Man_4 = () => {

    const [state, dispatch] = useContext(Context);

  return (
    <div className="container" style={{backgroundColor: (state) ?  state : '#bce0b1'}} >
      <span>Hello I'm Bob</span>
      <button onClick={() => dispatch({type: 'CHANGE_COLOR', color: '#bce0b1'})}>Stay Green</button>
    </div>
  );
}
