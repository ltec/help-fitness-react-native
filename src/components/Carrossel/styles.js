import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get("window");

export default styles = StyleSheet.create({
    container: {
        height: height / 3
    },
    image: {
        height: (height / 3) - (height / 3) * 0.2,
        width: width - 10,
        marginHorizontal: 5
    }
})