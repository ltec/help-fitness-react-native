import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { PropTypes } from 'prop-types';

export default SlideList = (props) => {

    _renderItem = ({ item }) => {
        const { onPress, imageSrc, title } = props;
        return (
            <TouchableOpacity onPress={() => onPress(item)} style={styles.item}>
                <Image style={styles.itemImage} source={item[imageSrc]} resizeMode={'stretch'} ></Image>
                <Text style={styles.itemTitle} >{item[title]}</Text>
            </TouchableOpacity>
        )
    };

    return (
        <FlatList
            data={props.data}
            renderItem={this._renderItem}
            horizontal
        />
    )
};

CatalogList.propTypes = {
    onPress: PropTypes.func,
    imageSrc: PropTypes.string,
    title: PropTypes.string
};