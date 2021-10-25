import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles'; 

export function Home() {
    return (
        <View style={styles.container}>
            <Text>Olá React Native</Text>
            <Text>Calculado</Text>
        </View>
    )
}