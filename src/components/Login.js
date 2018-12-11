import React from 'react';
import { View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


export default class LoginPage extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          title="Tabs"
          onPress={() => {
            this.props.navigation.navigate('Home');
           }}
        />
      </View>
    )
  }
}