import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { primary } from '../../assets/colors';
const {width, height} = Dimensions.get("window");

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primary
    },
    item: {
        paddingHorizontal: 5
    },
    itemImagem: {
        height: 210,
        width: width - 10,
        borderRadius: 5,
        marginVertical: 5
    }
})