import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { primary, secondary } from './../assets/colors';
import { createBottomTabNavigator } from 'react-navigation';
import PerfilPage from './../components/Perfil';
import NotificationPage from './../components/Notification';
import Header from './../components/Header'
import LoginPage from './../components/Login';
import { exercicios, exerciciosOutline, treinos, treinosOutline, perfil, perfilOutline } from './../assets/icons';
import { meusTreinosPageTitle } from './../assets/strings';

import { connect } from 'react-redux';
import HomeStack from './Home';
import TreinosStack from './Treinos';

export default Tabs = createBottomTabNavigator({
    Home: { screen: HomeStack, navigationOptions: ({ navigation }) => ({}) },
    Treinos: { screen: TreinosStack, navigationOptions: ({ navigation }) => ({ title: meusTreinosPageTitle }) },
    Perfil: PerfilPage
},
    {
        tabBarPosition: 'bottom',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = focused ? exercicios : exerciciosOutline;
                }
                else if (routeName === 'Treinos') {
                    iconName = focused ? treinos : treinosOutline;
                }
                else if (routeName === 'Perfil') {
                    iconName = focused ? perfil : perfilOutline;
                }

                return <Image source={iconName} style={{ tintColor: tintColor, height: 25, width: 25 }} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: secondary,
            activeBackgroundColor: primary,
            inactiveBackgroundColor: primary,
            inactiveTintColor: secondary,
            labelStyle: {
                fontSize: 12,
            },
        }
    });

/* const Init = createStackNavigator({
    Login: {
        screen: LoginPage,
        navigationOptions: () => ({
            header: null,
        }),
    },
    Tabs: {
        screen: Tabs,
        navigationOptions: () => ({
            header: props => <Header />,
        }),
    }
}); */