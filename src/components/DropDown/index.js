import React from 'react';
import { Picker } from 'react-native';
import styles from './styles';

export default class DropDown extends React.Component {

    render() {
        const { source, selectedValue, onValueChange } = this.props;
        return (
            <Picker
                itemStyle={styles.itemStyle}
                selectedValue={this.props.selectedValue}
                style={styles.dropDown}
                onValueChange={this.props.onValueChange}>
                {
                    this.props.source.map(item => (
                        <Picker.Item label={item.label} value={item.value} />
                    ))
                }
            </Picker>
        )
    }
}