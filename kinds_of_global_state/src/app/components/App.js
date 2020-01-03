import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { changeColor } from './../redux';


/****************************************************************************************** */

export const Man_1 = () => {

  const color = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="container" style={{backgroundColor: (color) ?  color : '#88c3f7'}}>
      <span>Hello I'm Jack</span>
      <button onClick={() => dispatch(changeColor('#88c3f7'))}>Stay Blue</button>
    </div>
  );
}

/* ***************************************************************************************** */

export const Man_2 = () => {

  const color = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="container" style={{backgroundColor: (color) ?  color : '#f76879'}}>
      <span>Hello I'm George</span>
      <button onClick={() => dispatch(changeColor('#f76879'))}>Stay Red</button>
    </div>
  );
}
