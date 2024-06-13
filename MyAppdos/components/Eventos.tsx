import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

export function Eventos() {
    interface CovidStateInfo {
        state: string;
        notes: string;
        covid19Site: string;
        covid19SiteSecondary?: string;
        covid19SiteTertiary?: string;
        covid19SiteQuaternary?: string;
        covid19SiteQuinary?: string;
        twitter: string;
    }

    const [statesData, setStatesData] = useState<CovidStateInfo[]>([]);

    useEffect(() => {
        const states = ['ak', 'al', 'ar']; // Add more state abbreviations as needed
        Promise.all(states.map(state =>
            axios.get(`https://api.covidtracking.com/v1/states/${state}/info.json`)
        )).then(responses => {
            setStatesData(responses.map(res => res.data));
        }).catch(error => {
            console.error('Failed to fetch data:', error);
        });
    }, []);

    return (
        <ScrollView style={styles.container}>
            {statesData.map((data, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.header}>COVID-19 Info for {data.state}</Text>
                    <Text style={styles.text}>{data.notes}</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(data.covid19Site)}>
                        <Text style={styles.link}>Main Site</Text>
                    </TouchableOpacity>
                    {data.covid19SiteSecondary && (
                        <TouchableOpacity onPress={() => Linking.openURL(data.covid19SiteSecondary)}>
                            <Text style={styles.link}>Secondary Data Site</Text>
                        </TouchableOpacity>
                    )}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    card: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        marginBottom: 20
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline'
    }
});
