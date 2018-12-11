import React from 'react';
import { StyleSheet } from 'react-native';
import { secondary } from '../../assets/colors'
import Config from 'react-native-config'

export default styles = StyleSheet.create({
    textInput: {
        height: 40,
        color: Config.PRIMARY,
        borderColor: Config.TERNARY,
        borderBottomWidth: 0.5
    },
    selectionColor: {
        color: secondary
    }
})