import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { listarTreinosFetch } from './../../actions/treino';
import { connect } from 'react-redux';
import _ from 'lodash';
import styles from './styles';

class TreinosPage extends React.Component {

    componentWillMount() {
        debugger;
        this.props.listarTreinosFetch();
        this.data = this.props.treinos;
    }

    componentWillReceiveProps(nextProps) {
        this.data = nextProps.treinos;
    }

    _renderItem = ({ item }) => (
        <TouchableOpacity onPress={null} style={styles.item}>
            <Image style={styles.itemImagem} source={require('./../../icons/treino.png')} resizeMode={'stretch'} ></Image>
            <View style={styles.container}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.text1}>{item.objetivo}</Text>
            </View>
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
    const treinos = _.map(state.treinoReducer.treinos, (val, uid) => {
        return { ...val, uid }
    })
    return { treinos }
}

export default connect(mapStateToProps, { listarTreinosFetch })(TreinosPage);