import React from 'react';
import { Picker, Text, View } from 'react-native';
import Config from 'react-native-config'

export default class DropDown extends React.Component {

    render() {
        const { label, source, selectedValue, onValueChange } = this.props;
        return (
            <View style={{ height: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', borderBottomWidth: 1, borderBottomColor: Config.QUINTENARY }}>
                <Text style={{
                    flex: 1,
                    color: Config.SECONDARY,
                    fontSize: Number.parseInt(Config.TEXT_SMALL)
                }}>{label}</Text>
                <Picker
                    itemStyle={{
                        backgroundColor: Config.PRIMARY,
                        borderColor: Config.SECONDARY,
                        borderWidth: 1,
                        borderRadius: 5
                    }}
                    selectedValue={this.props.selectedValue}
                    style={{
                        height: 20,
                        flex: 2,
                        color: Config.PRIMARY,
                        fontSize: Number.parseInt(Config.TEXT_SMALL)
                    }}
                    onValueChange={this.props.onValueChange}>
                    {
                        this.props.source.map(item => (
                            <Picker.Item label={item.label} value={item.value} />
                        ))
                    }
                </Picker>
            </View>
        )
    }
}