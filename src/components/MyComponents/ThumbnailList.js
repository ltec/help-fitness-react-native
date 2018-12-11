import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';
import Config from 'react-native-config'

const styles = StyleSheet.create({
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
        color: Config.SECONDARY,
        fontSize: 18
    },
    itemDetailLabel: {
        color: 'silver'
    }
})

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