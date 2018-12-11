import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Config from 'react-native-config'
const {width, height} = Dimensions.get("window");

const FLAT_LIST_HEIGHT = height / 4;

export default styles = StyleSheet.create({
    list: {
        height: FLAT_LIST_HEIGHT,
        alignItems: 'flex-start',
        marginVertical: 8
    },
    item: {
        flexDirection: 'column',
        paddingVertical: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: (width / 3) - 10,
        backgroundColor: Config.QUARTENARY,
        padding: 8,
        height: FLAT_LIST_HEIGHT
    },
    itemImage: {
        width: (width / 3) - 26,
        height: FLAT_LIST_HEIGHT - (FLAT_LIST_HEIGHT * 0.30)
    },
    itemTitle: { 
        color: Config.PRIMARY, 
        fontSize: 14, 
        textAlign: 'center' 
    }
})