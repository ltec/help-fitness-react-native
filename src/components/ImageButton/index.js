import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default class ImageButton extends React.Component {

    render() {
        const { onPress, source, styleImagem } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={styles.item}>
                <Image style={[styles.itemImagem, styleImagem]} source={source} resizeMode={'stretch'} ></Image>
            </TouchableOpacity>
        )
    }
}