import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { PropTypes } from 'prop-types';

export default ImageList = (props) => {

    _renderItem = ({ item }) => {
        const { onPress, itemImageSrc } = props;
        return (
            <TouchableOpacity onPress={() => onPress(item)} style={styles.item}>
                <Image style={styles.itemImagem} source={item[itemImageSrc]} resizeMode={'stretch'} />
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={props.data}
                renderItem={this._renderItem}
            />
        </View>
    )
};

ImageList.propTypes = {
    onPress: PropTypes.func,
    itemImageSrc: PropTypes.string,
};