import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { listarTreinosFetch } from './../../actions/treino';
import { connect } from 'react-redux';
import _ from 'lodash';
import styles from './styles';
import CardExercicio from './../CardExercicio'

class ListarExerciciosTreino extends React.Component {

    componentWillMount() {
        this.props.listarTreinosFetch();
        this.data = this.props.exercicios;
    }

    componentWillReceiveProps(nextProps) {
        this.data = nextProps.exercicios;
    }

    _renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.navagation.push('adicionarExerciciosTreino', {exercicio: item})} style={styles.item}>
            <CardExercicio data={item} ></CardExercicio>
        </TouchableOpacity>
    );

    render() {
        debugger;
        return (
            <View style={{ flex: 1, backgroundColor: '#000000' }}>
                <FlatList
                    data={this.data}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }
}

mapStateToProps = state => {
    debugger;
    const exercicios = _.map(state.treinoReducer.treino.exercicios, (val, uid) => {
        return { ...val, uid }
    })
    return { exercicios }
}

export default connect(mapStateToProps, { listarTreinosFetch })(ListarExerciciosTreino);

