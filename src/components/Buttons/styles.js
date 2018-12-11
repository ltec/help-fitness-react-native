import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Config from 'react-native-config'
import { primary, secondary } from '../../assets/colors';
const { width, height } = Dimensions.get("window");

export default styles = StyleSheet.create({
    btnRoundXSmall: {
        width: 25,
        height: 25,
        marginRight: 5,
        tintColor: secondary
    },
    btnFull: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width - 32,
        height: (height * 0.1) * 0.8,
        color: primary
    },
    btnSave: {
        backgroundColor: Config.SECONDARY,
    },
    btnClose: {
        backgroundColor: Config.PRIMARY,
    }
})