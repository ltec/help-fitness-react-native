import {
    ADICIONAR_TREINO,
    LISTAR_TREINOS,
    ADICIONAR_EXERCICIO,
    ATUALIZAR_EXERCICIO
} from './../actions/types'

const INITIAL_STATE = {
    treinos: [],
    treino: {
        titulo: '',
        objetivo: '',
        inicio: '',
        fim: '',
        diasSemana: '',
        exercicios: []
    },
    atualizar: false
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADICIONAR_TREINO:
            state.treinos.push(action.payload)
            return { ...state }
        case ADICIONAR_EXERCICIO:
            state.treino.exercicios.push(action.payload);
        case ATUALIZAR_EXERCICIO:
            state.treino.exercicios[action.payload.index] = action.payload.item;
            return { ...state }
        case LISTAR_TREINOS:
            return { ...state }
        default:
            return state;
    }
}