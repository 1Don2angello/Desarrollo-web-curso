import { Text, View } from 'react-native';
import React from 'react';

export function Materias({navigation}:any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>
                Esto es una pestaña en blanco
            </Text>
        </View>
    );
}
