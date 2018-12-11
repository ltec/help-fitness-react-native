import { combineReducers } from 'redux';
import AppReducer from './App';
import treinoReducer from './Treino';
import exercicioReducer from './exercicio';

export default combineReducers({
    AppReducer,
    treinoReducer,
    exercicioReducer
});