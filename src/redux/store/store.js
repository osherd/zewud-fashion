import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from '../reducer/root-reducer';

// const loggerMiddleware = ( store ) => ( action ) =>
// {
//   if ( !action.type )
//   {
//     return next( action );
//   }

// };

const middleWare = [ logger ];
const composedEnhancers = compose( applyMiddleware( ...middleWare ) );

export const store = createStore( rootReducer, undefined, composedEnhancers );
