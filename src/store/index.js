import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import { reducer } from './reducer';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
