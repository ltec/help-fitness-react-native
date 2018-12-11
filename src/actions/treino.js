import {
    ADICIONAR_TREINO,
    LISTAR_TREINOS,
    ADICIONAR_EXERCICIO
} from './types'

export const adicionarExercicio = exercicio => {
    return {
        type: ADICIONAR_EXERCICIO,
        payload: exercicio
    }
}

export const listarTreinosFetch = () => {
    return (dispatch) => {
        dispatch({ type: LISTAR_TREINOS, payload: '' })
    }
}