import React from 'react';
import {Image, View} from 'react-native';

const Header = (props) => (
    <Image source={require("../imgs/logo.png")} style={{width: 135, height: 16, marginLeft: 10}} />
);

export default Header;