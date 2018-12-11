import React from 'react';
import { View } from 'react-native';
import { objetivos } from '../../data/data.json';
import ImageList from './../ImageList';
import CatalogList from './../CatalogList';

export default Objetivo = ({ onPress }) => (
    <View style={{ flex: 1 }}>
        <ImageList
            data={objetivos}
            onPress={onPress}
            itemImageSrc="image"
        />
    </View>
);

export const Trainings = ({ onPress }) => (
    <View style={{ flex: 1 }}>
        <CatalogList
            data={objetivos}
            onPress={onPress}
            itemImageSrc="image"
        />
    </View>
);