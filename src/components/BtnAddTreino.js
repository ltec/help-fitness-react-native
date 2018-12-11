import React from 'react';
import FAB from 'react-native-fab'
import Icon from 'react-native-vector-icons/Ionicons';
import { primary, secondary } from './../config/theme.json';

const BtnAddTreino = (props) => (
    <FAB buttonColor={secondary}
        iconTextColor={primary}
        visible={true}
        iconTextComponent={<Icon name="md-add" />}
    />
);

export default BtnAddTreino;