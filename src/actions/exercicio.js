import {
    ADICIONAR_EXERCICIO,
    LISTAR_EXERCICIOS,
    EXCLUIR_EXERCICIO,
    ATUALIZAR_EXERCICIO,
    EXERCICIO_ATIVO
} from './types'

export const setExercicioAtivo = exercicio => {
    return {
        type: EXERCICIO_ATIVO,
        payload: exercicio
    }
}

export const adicionarExercicio = exercicio => {
    return {
        type: ADICIONAR_EXERCICIO,
        payload: exercicio
    }
}

export const listarExerciciosFetch = () => {
    return (dispatch) => {
        dispatch({ type: LISTAR_EXERCICIOS, payload: '' })
    }
}