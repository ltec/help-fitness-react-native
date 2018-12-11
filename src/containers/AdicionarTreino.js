import React from 'react';
import { View } from 'react-native';
import { adicionarTreino } from './../actions/treino';
import { connect } from 'react-redux';
import InputText from './../components/InputText';
import styleGlobal from './../assets/styles';
import { withFormik } from 'formik';
import { secondary } from './../assets/colors';
import { titulo, objetivo, inicio, fim, frequencia, exercicios } from './../assets/strings';
import { textLarge_marginVerticalSmall_colorSecondary } from './../assets/styles';
import TextLabel from './../components/TextLabel';
import { RowHorizontal } from './../components/Layout';
import { BtnPlus } from './../components/Buttons';
import Config from 'react-native-config'
import { FloatingLabelInput, DatePickerAndroid, DropDown, CheckboxGroup } from './../components/MyComponents';
import _ from 'lodash';
import AdicionarExercicio from './AdicionarExercicio';

const diasSemana = [
    {
        label: "Segunda-feira",
        value: 1,
    },
    {
        label: "Terça-feira",
        value: 2,
    },
    {
        label: "Quarta-feira",
        value: 3,
    },
    {
        label: "Quinta-feira",
        value: 4,
    },
    {
        label: "Sexta-feira",
        value: 5,
    },
    {
        label: "Sábado",
        value: 6,
    },
    {
        label: "Domingo",
        value: 7,
    }
]

const AdicionarTreino = (props) => (
    <View style={{ backgroundColor: Config.QUARTENARY, paddingHorizontal: 16 }}>
        <View style={{ flexDirection: 'column', paddingVertical: 8 }}>
            <FloatingLabelInput
                label={titulo}
                value={props.values.titulo}
                onChangeText={text => props.setFieldValue('titulo', text)}
            />
        </View>
        <View style={{ paddingVertical: 8 }}>
            <DropDown
                label={objetivo}
                selectedValue={props.values.objetivo}
                onValueChange={(itemValue, itemIndex) => props.setFieldValue('objetivo', itemValue)}
                source={[
                    { label: "Hipertofria", value: "1" },
                    { label: "Aumento de força", value: "2" },
                    { label: "Definição", value: "3" },
                    { label: "Condicionamento Físico", value: "4" },
                    { label: "Perca de Peso", value: "5" }
                ]}
            />
        </View>
        <View style={{ paddingVertical: 8 }}>
            <DatePickerAndroid
                label={inicio}
                value={props.values.inicio}
                action={(result) => props.setFieldValue('inicio', result)}
            />
        </View>
        <View style={{ paddingVertical: 8 }}>
            <DatePickerAndroid
                label={fim}
                value={props.values.fim}
                action={(result) => props.setFieldValue('fim', result)}
            />
        </View>
        <View style={{ paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: Config.QUINTENARY }} >
            <TextLabel style={{ fontSize: Number.parseInt(Config.TEXT_SMALL), color: Config.SECONDARY }}>
                {frequencia}
            </TextLabel>
            <CheckboxGroup
                callback={(selected) => { props.setFieldValue('frequencia', selected) }}
                iconColor={Config.PRIMARY}
                iconSize={30}
                checkedIcon="ios-checkbox-outline"
                uncheckedIcon="ios-square-outline"
                checkboxes={diasSemana}
                labelStyle={{
                    color: Config.PRIMARY,
                    paddingHorizontal: 5
                }}
                rowStyle={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                rowDirection={"column"}
            />
        </View>
        <AdicionarExercicio navigation={props.navigation} />
    </View>
)

const form = withFormik({
    mapPropsToValues: () => ({ titulo: '', objetivo: 'Hipertofria', inicio: '', fim: '' }),

    handleSubmit: (values, props) => {
        props.props.adicionarTreino(values);
    }
})(AdicionarTreino);


export default connect(null, { adicionarTreino })(form);