import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-paper';

// export function Noticias() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get('https://api.covidtracking.com/v1/us/daily.json')
//             .then(response => {
//                 setData(response.data);  // Asumiendo que los datos vienen como un arreglo
//             })
//             .catch(error => {
//                 console.error("Error fetching data: ", error);
//             });
//     }, []);

    // Definiendo la interfaz para los datos de la API
interface CovidData {
    date: number;
    states: number;
    positive: number;
    negative: number;
    hospitalizedCurrently: number;
    death: number;
    totalTestResults: number;
}

export function Noticias() {
    // Definir el estado con el tipo de la interfaz
    const [data, setData] = useState<CovidData[]>([]);

    useEffect(() => {
        axios.get('https://api.covidtracking.com/v1/us/daily.json')
            .then(response => {
                // Asegurándose de que la respuesta es un arreglo
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                {data.map((item, index) => (
                    <Card key={index} style={styles.card}>
                        <Card.Title title={`Date: ${item.date}`} />
                        <Card.Content>
                            <Text>States: {item.states}</Text>
                            <Text>Positive: {item.positive}</Text>
                            <Text>Negative: {item.negative}</Text>
                            <Text>Hospitalized Currently: {item.hospitalizedCurrently}</Text>
                            <Text>Death: {item.death}</Text>
                            <Text>Total Test Results: {item.totalTestResults}</Text>
                        </Card.Content>
                    </Card>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        padding: 10
    },
    card: {
        marginBottom: 10,
        elevation: 4
    }
});
