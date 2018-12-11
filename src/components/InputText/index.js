import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import Config from 'react-native-config'

export default class InputText extends React.Component {

    render() {
        const { onChangeText, value } = this.props;
        return (
            <TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
                value={value}
                underlineColorAndroid={'transparent'}
                selectionColor={styles.selectionColor.color}
            />
        )
    }
}