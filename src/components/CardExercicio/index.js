import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import styles from './styles';

export default class CardExercicio extends React.Component {

    _renderItem = ({item}) => (
        <Text style={styles.item}>{item.serie} x {item.repeticoes}</Text>
    )

    render() {
        const { data } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Image style={styles.imagem} source={data.image} resizeMode={'stretch'}  />
                    <Text style={styles.titulo}>{data.nome}</Text>
                </View>
                <View>
                    <FlatList
                        data={data.series}
                        render={this._renderItem}
                        contentContainerStyle={styles.lista}
                    />
                </View>
            </View>
        )
    }
}