import React, { Component } from 'react';
import {
    View,
    StatusBar,
    TextInput,
    Animated,
} from 'react-native';
import Config from 'react-native-config'


export default class FloatingLabelInput extends Component {
    state = {
        isFocused: false,
    };

    componentWillMount() {
        this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
    }

    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });

    componentDidUpdate() {
        Animated.timing(this._animatedIsFocused, {
            toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
            duration: 200,
        }).start();
    }

    render() {
        const { label, ...props } = this.props;
        const labelStyle = {
            position: 'absolute',
            left: 0,
            top: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [18, 0],
            }),
            fontSize: this._animatedIsFocused.interpolate({
                inputRange: [0, 2],
                outputRange: [Number.parseInt(Config.TEXT_SMALL), Number.parseInt(Config.TEXT_SMALL) - 6],
            }),
            color: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [Config.SECONDARY, Config.SECONDARY],
            }),
        };
        return (
            <View style={{ paddingTop: 18 }}>
                <Animated.Text style={labelStyle}>
                    {label}
                </Animated.Text>
                <TextInput
                    {...props}
                    style={{
                        height: 40,
                        fontSize: Number.parseInt(Config.TEXT_SMALL),
                        color: Config.PRIMARY,
                        borderBottomWidth: 1,
                        borderBottomColor: Config.QUINTENARY
                    }}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    underlineColorAndroid={"transparent"}
                    blurOnSubmit
                />
            </View>
        );
    }
}