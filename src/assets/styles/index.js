import React from 'react';
import { StyleSheet } from 'react-native';
import {secondary, ternary} from './../colors';

export default styles = StyleSheet.create({
    containerColumn: {
        flexDirection: 'column',
    },
    containerRow: {
        flexDirection: 'row',
    },
    paddingHorizontal: {
        paddingHorizontal: 5
    },
    paddingVertical: {
        paddingVertical: 5
    }
});

export const textLarge_marginVerticalSmall_colorSecondary = {
    color: secondary,
    fontSize: 18,
    marginVertical: 8
}

export const textNormal_colorTernary = {
    color: ternary
}