import React from 'react';
import { StyleSheet } from 'react-native';
import { secondary } from '../../assets/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titulo: {
        color: secondary
    },
    imagem: {
        width: 20,
        height: 20
    },
    lista: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        color: secondary
    }
})