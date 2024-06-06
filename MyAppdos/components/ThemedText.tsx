import { Text, View, ScrollView } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Asegúrate de usar el paquete correcto
import React from 'react';
const data = [
    { name: 'Alumnos', ruta: 'Alumnos', icon: 'school', color: '#FC947D'}, // Asegúrate de que los nombres de los iconos son correctos
    { name: 'Materias', ruta: 'Materias', icon: 'book', color: '#1369FF'},
    { name: 'Noticias', ruta: 'Noticias', icon: 'cloud', color: '#FC947D'},
    { name: 'Eventos', ruta: 'Eventos', icon: 'exit-to-app', color: '#1369FF'}
];

export function ThemedText({ navigation }: any) {
    return (
        <View>
            {data.map((d, index) => (
                <View key={index} style={{ margin: 5 }}>
                    <Button
                        title={d.name}
                        icon={<Icon name={d.icon} size={50} color="white" />}
                        buttonStyle={{ backgroundColor: d.color, borderRadius: 10, padding: 10 }}
                        containerStyle = {{margin:5}}
                        iconContainerStyle= {{marginBottom: 10}}
                        titleStyle ={{textAlign: 'center'}}
                        onPress={()=> navigation.navigate(d.ruta)}
                        
                    />
                </View>
            ))}
        </View>
    );
}
