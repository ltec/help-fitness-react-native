import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { plus } from './../../assets/icons';
import styles from './styles';

export const BtnPlus = ({ onPress }) =>
    (<TouchableOpacity onPress={onPress}>
        <Image style={styles.btnRoundXSmall} source={plus} />
    </TouchableOpacity>)

export const BtnFull = ({ title, onPress, style }) =>
    (<TouchableOpacity style={[styles.btnFull, style]} onPress={onPress}>
        <Text>{title}</Text>
    </TouchableOpacity>)