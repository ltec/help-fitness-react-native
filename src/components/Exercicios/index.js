import React from 'react';
import { View } from 'react-native';
import { CatalogList } from './../MyComponents';
import { exercicios } from './../../data/exercicios';

export default class Exercicios extends React.Component {

    componentWillMount() {
        this.exercicios = exercicios;
    }

    render() {
        const {onPress} = this.props;
        return (
            <View style={{ flex: 1, paddingHorizontal: 8 }}>
                <CatalogList
                    data={this.exercicios}
                    onPress={onPress}
                    imageSrc="imagem"
                    title="exercicio"
                />
            </View>
        )
    }
}