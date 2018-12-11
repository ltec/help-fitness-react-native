import {
    ADICIONAR_EXERCICIO,
    LISTAR_EXERCICIOS,
    EXCLUIR_EXERCICIO,
    ATUALIZAR_EXERCICIO,
    EXERCICIO_ATIVO
} from './../actions/types'

const INITIAL_STATE = {
    exercicio: {},
    meusExercicios: []
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADICIONAR_EXERCICIO:
            state.meusExercicios.push(action.payload)
            return { ...state }
        case ATUALIZAR_EXERCICIO:
            state.meusExercicios.splice(action.payload.index, 1, action.payload.item);
            return { ...state }
        case EXCLUIR_EXERCICIO:
            state.meusExercicios.splice(action.payload.index, 1);
            return { ...state }
        case LISTAR_EXERCICIOS:
            return { ...state }
        case EXERCICIO_ATIVO:
            state.exercicio = action.payload
            return { ...state }
        default:
            return { ...state }
    }
}