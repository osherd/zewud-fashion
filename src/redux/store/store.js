import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from '../reducer/root-reducer';

const middleWare = [ logger ];
const composedEnhancers = compose( applyMiddleware( ...middleWare ) );

export const store = createStore( rootReducer, undefined, composedEnhancers );
