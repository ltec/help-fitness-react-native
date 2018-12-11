import React from 'react';
import { View, ScrollView } from 'react-native';
import Exercicio from './Exercicio';
import { BtnFull } from './Buttons';
import { adicionarExercicioTitle, fechar } from './../assets/strings';
import Config from 'react-native-config';
import { connect } from 'react-redux';
import { adicionarExercicio } from './../actions/exercicio';

mapStateToProps = state => {
    return (
        {
            exercicio: state.exercicioReducer.exercicio
        }
    )
}

const ExercicioComponent = (props) => (
    <Exercicio
        {...props}
        data={this.props.exercicio}
    />
)

export const ExercicioPage = connect(mapStateToProps, {})(ExercicioComponent);

const AdicionarTreinoExercicio = (props) => (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 16 }}>
            <Exercicio
                {...props}
                data={this.props.exercicio}
            />
            <View style={{ marginTop: 16, marginBottom: 8 }}>
                <BtnFull
                    onPress={() => this.props.adicionarExercicio(this.props.exercicio)}
                    title={adicionarExercicioTitle}
                    style={{ backgroundColor: Config.SECONDARY }}
                />
            </View>
            <View style={{ marginTop: 8 }}>
                <BtnFull
                    onPress={() => navigation.navigate('AdicionarTreino')}
                    title={fechar}
                    style={{ backgroundColor: Config.PRIMARY }}
                />
            </View>
        </ View>
    </ScrollView>
)

export const AdicionarTreinoExercicioPage = connect(mapStateToProps, { adicionarExercicio })(AdicionarTreinoExercicio);
