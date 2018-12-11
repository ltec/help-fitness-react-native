import React from 'react';
import Musculo from './Musculo';

export const MusculoPage = (props) => (
    <Musculo
        {...props}
        onPress={(item) => props.navigation.
            navigate('Exercicios', { exercicios: item.exercicios })}
    />
)

export const AdicionarTreinoMusculoPage = (props) => (
    <Musculo
        {...props}
        onPress={(item) => props.navigation.
            navigate('AdicionarTreinoExercicios', { exercicios: item.exercicios })}
    />
)