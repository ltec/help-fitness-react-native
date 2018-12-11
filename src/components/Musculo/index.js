import React from 'react';
import { View } from 'react-native';
import ThumbnailList from './../ThumbnailList';

export default class Musculo extends React.Component {

    componentWillMount() {
        this.musculos = this.props.navigation.getParam('musculos', []);
    }

    render() {
        const {onPress} = this.props;
        return (
            <View style={{ flex: 1, paddingHorizontal: 8 }}>
                <ThumbnailList
                    data={this.musculos}
                    onPress={onPress}
                    imageSrc="imagem"
                    title="categoria"
                    label="descricao"
                />
            </View>
        )
    }
}