import React from 'react';
import Objetivo from './Objetivo';

export const ObjetivoPage = (props) => (
  <Objetivo
    onPress={(item) => props.navigation
      .navigate('Musculo', { musculos: item.musculos })}
  />
)

export const AdicionarTreinoObjetivoPage = (props) => (
  <Objetivo
    onPress={(item) => props.navigation
      .navigate('AdicionarTreinoMusculo', { musculos: item.musculos })}
  />
)

