import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import ImageButton from './../ImageButton';
import InputText from './InputText';
import TextLabel from './TextLabel';

const series = [];

export default class adicionarExerciciosTreino extends React.Component {

    _renderItem = ({ item, index }) => (
        <View>
            <Text style={styles.item}>{item.serie} x {item.repeticoes}</Text>
            <ImageButton onPress={series.splice(index, 1)} source={requires('./../../icons/cancel.png')} />
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <TextLabel text="Exercício" />
                <TouchableOpacity onPress={this.props.adcionarTreino} style={styles.head}>
                    <Image style={styles.imagem} source={this.props.source} resizeMode={'stretch'} />
                    <Text style={styles.titulo}>{this.props.nome}</Text>
                </TouchableOpacity>
                <View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.titulo}>Séries X Repetições</Text>
                        <View style={styles.head} >
                            <InputText
                                onChangeText={text => this.props.setFieldValue('serie', text)}
                                value={this.props.values.titulo}
                            />
                            <Text styles={text} >X</Text>
                            <InputText
                                onChangeText={text => this.props.setFieldValue('repeticoes', text)}
                                value={this.props.values.titulo}
                            />
                            <ImageButton onPress={this.props.adicionarSeries} source={requires('./../../icons/plus.png')} />
                        </View>
                    </View>
                    <FlatList
                        data={series}
                        render={this._renderItem}
                        contentContainerStyle={styles.lista}
                    />
                </View>
            </View>
        )
    }
}

withFormik({
    mapPropsToValues: () => ({ serie: '', repeticoes: '', nome: 'Nenhum treino selecionado', source: require('./../../icons/plus.png') }),

    adicionarSeries: (values, props) => {
        series.push({ serie: values.serie, repeticoes: values.repeticoes });
        this.props.serie = '',
            this.props.repeticoes = ''
    },

    adcionarTreino: (values) => {
        series.push({ serie: values.serie, repeticoes: values.repeticoes });
        this.props.serie = '',
            this.props.repeticoes = ''
    },
    handleSubmit: (values, props) => {
        series.push({ serie: values.serie, repeticoes: values.repeticoes });
        this.props.serie = '',
            this.props.repeticoes = ''
    }
})(adicionarExerciciosTreino);