import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';

export default Carrossel = ({data}) => (
    <View style={styles.container}>
        <Swiper showsButtons style={styles.swiper}>
            {data.map((item, key) => {
                return (
                    <View key={key}>
                        <Image style={styles.image} source={item} resizeMode={'stretch'} ></Image>
                    </View>
                )
            })}
        </Swiper>
    </View>
)