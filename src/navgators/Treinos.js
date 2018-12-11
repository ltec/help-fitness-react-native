import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { primary, secondary } from './../assets/colors';
import Config from 'react-native-config'
import {
    adicionarTreinoPageTitle,
    objetivoPageTitle,
    musculoPageTitle,
    exerciciosPageTitle,
    exercicioPageTitle
} from './../assets/strings';

import TreinosPage from './../components/Treinos';
import { AdicionarTreino } from './../containers';
import Header from './../components/Header';
import { BtnPlus } from './../components/Buttons';
import {
    AdicionarTreinoObjetivoPage,
    AdicionarTreinoMusculoPage,
    AdicionarTreinoExerciciosPage,
    AdicionarTreinoExercicioPage
} from './../components';

export default TreinosStack = createStackNavigator({
    MeusTreinos: {
        screen: TreinosPage,
        navigationOptions: ({ navigation }) => ({
            headerTitle: (<Header />),
            headerStyle: {
                backgroundColor: primary,
            },
            headerRight: (<BtnPlus onPress={() => navigation.navigate('AdicionarTreino')} />)
        }),
    },
    AdicionarTreino: {
        screen: AdicionarTreino,
        navigationOptions: ({ navigation }) => ({
            title: adicionarTreinoPageTitle,
            headerTintColor: secondary,
            headerStyle: {
                backgroundColor: primary,
            },
        }),
    },
    AdicionarTreinoExercicios: {
        screen: AdicionarTreinoExerciciosPage,
        navigationOptions: ({ navigation }) => ({
            title: exerciciosPageTitle,
            headerTintColor: secondary,
            headerStyle: {
                backgroundColor: primary,
            },
        }),
    },
    AdicionarTreinoMusculo: {
        screen: AdicionarTreinoMusculoPage,
        navigationOptions: ({ navigation }) => ({
            title: musculoPageTitle,
            headerTintColor: secondary,
            headerStyle: {
                backgroundColor: primary,
            },
        }),
    },
    AdicionarTreinoExercicio: {
        screen: AdicionarTreinoExercicioPage,
        navigationOptions: ({ navigation }) => ({
            title: exercicioPageTitle,
            headerTintColor: Config.SECONDARY,
            headerStyle: {
                backgroundColor: primary,
            },
        }),
    }
}, {
        initialRouteName: 'MeusTreinos',
        cardStyle: { backgroundColor: Config.QUINTENARY }
    });