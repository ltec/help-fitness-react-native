import React from 'react';
import { StyleSheet } from 'react-native';
import { secondary } from '../../assets/colors';

export default styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        borderBottomColor: 'silver',
        borderBottomWidth: 0.2,
        paddingVertical: 10
    },
    itemImage: {
        height: 70,
        width: 80,
        marginHorizontal: 5
    },
    itemDetail: {
        flexDirection: 'column',
        width: 200
    },
    itemDetailTitle: {
        color: secondary,
        fontSize: 18
    },
    itemDetailLabel: {
        color: 'silver'
    }
})