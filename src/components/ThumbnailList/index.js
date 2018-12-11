import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { PropTypes } from 'prop-types';

export default ThumbnailList = (props) => {

    _renderItem = ({ item }) => {
        const { onPress, imageSrc, title, label } = props;
        return (
            <TouchableOpacity onPress={() => onPress(item)} style={styles.item}>
                <Image style={styles.itemImage} source={item[imageSrc]} resizeMode={'stretch'} ></Image>
                <View style={styles.itemDetail}>
                    <Text style={styles.itemDetailTitle} >{item[title]}</Text>
                    <Text style={styles.itemDetailLabel} >{item[label]}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <FlatList
            data={props.data}
            renderItem={this._renderItem}
        />
    )
};

ThumbnailList.propTypes = {
    onPress: PropTypes.func,
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string,
};