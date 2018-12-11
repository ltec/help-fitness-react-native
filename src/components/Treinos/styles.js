import React from 'react';
import { StyleSheet } from 'react-native';
import {secondary} from '../../assets/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8
    },
    item: {
        flexDirection: 'row',
        borderBottomColor: 'silver',
        borderBottomWidth: 0.2,
        paddingVertical: 10
    },
    itemImagem: {
        height: 50,
        width: 50,
        marginHorizontal: 5,
        tintColor: secondary
    },
    itemContainer: {
        flexDirection: 'column',
        width: 200
    },
    titulo: {
        color: secondary,
        fontSize: 18
    },
    text1: {
        color: 'silver'
    },
    text2: {
        color: 'silver'
    }
})