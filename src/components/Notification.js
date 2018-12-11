import React from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const styles = { flex: 1, justifyContent: 'center', alignItems: 'center' };

export default class NotificationPage extends React.Component {

  render() {
    return (
      <View style={styles}>
        <Text>Pedido!</Text>
      </View>
    );
  }
}