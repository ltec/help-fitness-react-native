import React from 'react';
import { View } from 'react-native';
import { listarExerciciosFetch } from './../actions/exercicio';
import { connect } from 'react-redux';
import TextLabel from './../components/TextLabel';
import { RowHorizontal } from './../components/Layout';
import { BtnPlus } from './../components/Buttons';
import { ThumbnailList } from './../components/MyComponents';
import _ from 'lodash';
import { textLarge_marginVerticalSmall_colorSecondary } from './../assets/styles';
import { exercicios } from './../assets/strings';

class AdicionarExercicioComponent extends React.Component {

    componentDidMount() {
        this.props.listarExerciciosFetch();
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <RowHorizontal>
                    <TextLabel style={textLarge_marginVerticalSmall_colorSecondary}>
                        {exercicios}
                    </TextLabel>
                    <BtnPlus onPress={() => navigation.navigate("AdicionarTreinoExercicios")} />
                </ RowHorizontal>
                <ThumbnailList
                    data={this.props.exercicios}
                    onPress={null}
                    imageSrc="imagem"
                    title="categoria"
                    label="descricao"
                />
            </View>
        )
    }
}

mapStateToProps = state => {
    const exercicios = _.map(state.exercicioReducer.exercicios, (val, uid) => {
        return { ...val, uid }
    })
    return { exercicios }
}

export default connect(mapStateToProps, { listarExerciciosFetch })(AdicionarExercicioComponent);
