import React from 'react';
import { DatePickerAndroid, Text, TouchableOpacity } from 'react-native';
import Config from 'react-native-config'

export default class DatePickerrAndroid extends React.Component {

    _openDatePicker = async (f) => {
        try {
            var date = new Date();
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: date,
                minDate: date
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                f(new Date(year, month, day).toLocaleDateString('pt-BR'));
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    };

    render() {
        const { value, action, label } = this.props;
        return (                                                         
            <TouchableOpacity style={{height: 40, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: Config.QUINTENARY}} onPress={() => this._openDatePicker(action)}  >
                <Text style={{color: Config.SECONDARY, fontSize: Number.parseInt(Config.TEXT_SMALL)}}>{label}</Text>
                <Text style={{color: Config.PRIMARY, fontSize: Number.parseInt(Config.TEXT_SMALL)}}>{value}</Text>
            </TouchableOpacity>
        )
    }
}