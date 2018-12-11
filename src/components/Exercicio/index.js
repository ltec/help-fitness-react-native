import React from 'react';
import { View } from 'react-native';

import { textLarge_marginVerticalSmall_colorSecondary, textNormal_colorTernary } from './../../assets/styles';
import { musculosSolicitados, execucao } from './../../assets/strings';

import Carrossel from './../Carrossel';
import TextLabel from './../TextLabel';
import List from './../List';

export default class Exercicio extends React.Component {

    componentWillMount() {
        this.especificacoes = this.props.data | {};
    }

    render() {
        if (!this.especificacoes.imagens)
            return (<View></View>);

        return (
            <View>
                <Carrossel data={this.especificacoes.imagens} />
                <TextLabel style={textLarge_marginVerticalSmall_colorSecondary}>
                    {execucao}
                </TextLabel>
                <TextLabel style={textNormal_colorTernary}>
                    {this.especificacoes.execucao}
                </TextLabel>
                <View>
                    <TextLabel style={textLarge_marginVerticalSmall_colorSecondary}>
                        {musculosSolicitados}
                    </TextLabel>
                    <List data={this.especificacoes.musculosSolicitados} simbulo="* " />
                </View>
            </View>
        )
    }
}