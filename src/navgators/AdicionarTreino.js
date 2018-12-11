import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { primary, secondary } from './../config/theme.json'

import AdicionarTreinoDetalhe from './../components/AdicionarTreinoDetalhe';
import ListarExerciciosTreino from './../components/ListarExerciciosTreino';

export default AdicionarTreinoStack = createMaterialTopTabNavigator(
    {
        AdicionarTreinoDetalhe: { screen: AdicionarTreinoDetalhe, navigationOptions: ({ navigation }) => ({ title: 'Detalhe' }) },
        ListarExerciciosTreino: { screen: ListarExerciciosTreino, navigationOptions: ({ navigation }) => ({ title: 'Exercícios' }) }
    },
    {
        tabBarOptions: {
            upperCaseLabel: false,
            activeTintColor: secondary,
            inactiveTintColor: secondary,
            style: {
                backgroundColor: primary,               
            },
            indicatorStyle : {
                backgroundColor: secondary
            }
        }
    }
)