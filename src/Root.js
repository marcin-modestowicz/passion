import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default props => <Provider store={store}>{props.children}</Provider>;
