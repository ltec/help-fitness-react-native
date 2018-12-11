import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { secondary } from '../../assets/colors';
const {width, height} = Dimensions.get("window");

export default styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        flexDirection: 'column',
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: (width / 3) - 10
    },
    itemImage: {
        height: 120,
        width: (width / 3) - 15,
        marginHorizontal: 5
    },
    itemTitle: { 
        color: secondary, 
        fontSize: 14, 
        textAlign: 'center' 
    }
})