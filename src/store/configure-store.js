import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import appReducer from '../reducers'
import rootSaga from "../sagas";
export default function configureStore(){
    const sagaMiddleware = createSagaMiddleware();
    const middleWare = [sagaMiddleware]

    const store = createStore(
        appReducer,
        applyMiddleware(
            ...middleWare,
        ),
    )

    sagaMiddleware.run(rootSaga)
    return store
}