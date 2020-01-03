import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';


/*Redux*/
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { colorReducer } from './app/redux';
import { Man_1, Man_2 } from './app/components/App';



/*Context*/
import { Man_3, Man_4 } from './app/components/App2';

import { Store } from './app/context'



// REDUX ----------------------------------------

 const store = createStore(
   colorReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );



// Redux creates one global state container -- which hangs somewhere above your whole application
// A simple example for a middleware in Redux is the action logger: Every action that goes through Redux will be logged in your browser's developer tools.
// Popular side-effect libraries in Redux are Redux Thunk and Redux Saga.
const Root = () => (
    <div className="redux-mans">
        
        <Provider store={store}>
            <Man_1 />
            <Man_2 />
        </Provider>

    </div>
);

// const Root3 = () => (
//     <div className="redux-mans">
//         <Provider store={store}><Man_2 /></Provider>
//     </div>
// );

ReactDOM.render(<Root />, document.getElementById('root'));
// ReactDOM.render(<Root3 />, document.getElementById('root3'));
// ----------------------------------------






// REACT-CONTEXT ---------------------------------------

// React's Context API makes your state and dispatch function available anywhere without explicitly passing everything down the component tree.
// NO MIDDLEWARE WITH USEREDUCER
// No Side-Effect Middleware
// The context in React is used to pass down properties implicitly the component tree. 
// Yet everything without the need to pass the props explicitly down each component that sits 
// between the context producing parent component and the context consuming child component.
// It avoids the so called "props drilling" in React, because you don't need to reach your props through all components which are not interested in them.
// But the underlying mechanics, why this works, are a good to know fact when making your state accessible in various components without worrying where the state container comes from.

const Root2 = () => (
    <div className="context-mans">

        <Store>
            <Man_3 />
            <Man_4 />
        </Store>
            
    </div>
);

ReactDOM.render(<Root2 />, document.getElementById('root2'));

// -----------------------------------------------------





serviceWorker.unregister();
