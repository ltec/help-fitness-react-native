import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { primary, secondary } from './../assets/colors';
import { musculoPageTitle, exerciciosPageTitle, exercicioPageTitle } from './../assets/strings';

import {
    ObjetivoPage,
    MusculoPage,
    ExerciciosPage,
    ExercicioPage
} from './../components';
import Header from './../components/Header';

export default HomeStack = createStackNavigator({
    Home: {
        screen: ObjetivoPage,
        navigationOptions: ({ navigation }) => ({
            headerTitle: (<Header />),
            headerStyle: {
                backgroundColor: primary,
            },
        }),
    },
    Musculo: {
        screen: MusculoPage,
        navigationOptions: ({ navigation }) => ({
            title: musculoPageTitle,
            headerTintColor: secondary,
            headerStyle: {
                backgroundColor: primary,
            }
        })
    },
    Exercicios: {
        screen: ExerciciosPage,
        navigationOptions: ({ navigation }) => ({
            title: exerciciosPageTitle,
            headerTintColor: secondary,
            headerStyle: {
                backgroundColor: primary,
            },
        })
    },
    Exercicio: {
        screen: ExercicioPage,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam('title', exercicioPageTitle),
            headerTintColor: secondary,
            headerStyle: {
                backgroundColor: primary,
            },
        })
    }
}, {
        initialRouteName: 'Home',
        cardStyle: { backgroundColor: primary }
    });

HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    const { routeName } = navigation.state.routes[navigation.state.index];

    switch (routeName) {
        case 'Objetivos':
            tabBarVisible = false;
            break;
        default:
            break;
    }

    return {
        tabBarVisible
    };
};