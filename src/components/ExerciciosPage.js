import React from 'react';
import Exercicios from './Exercicios';
import { connect } from 'react-redux';
import { setExercicioAtivo } from './../actions/exercicio';

const ExerciciosComponent = (props) => (
    <Exercicios
        {...props}
        onPress={(item) => {
            this.props.setExercicioAtivo(item);
            props.navigation.navigate('Exercicio', { title: item.exercicio })
        }}
    />
)

const ExerciciosRedux = connect(null, { setExercicioAtivo })(ExerciciosComponent);

export const ExerciciosPage = ExerciciosRedux;

export const AdicionarTreinoExerciciosPage = ExerciciosRedux;