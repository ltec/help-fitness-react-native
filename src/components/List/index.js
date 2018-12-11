import React from 'react';
import { FlatList, Text } from 'react-native';
import { ternary } from './../../assets/colors';

export default List = (props) => {

    _renderItem = ({ item }) => {
        return (
            <Text style={{ color: ternary }} >{props.simbulo}{item}</Text>
        )
    };

    return (
        <FlatList
            data={props.data}
            renderItem={this._renderItem}
        />
    )
};