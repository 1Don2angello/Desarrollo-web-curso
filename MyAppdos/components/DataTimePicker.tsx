import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker'; // Asegúrate de instalar esta dependencia
import pomodoroOptions from "../components/pomodoro/pomodoroOptions"; // Asegúrate de que la ruta y el archivo son correctos

const DataTimePicker = () => {
    const [selectedPomodoro, setSelectedPomodoro] = useState(pomodoroOptions[0]); // Inicializar con la primera opción
    const [isRunning, setIsRunning] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTimer(prevTimer => {
                    if (prevTimer >= selectedPomodoro.focusTime * 60) {
                        alert('Time for a break!');
                        setIsRunning(false);
                        return 0;
                    }
                    return prevTimer + 1;
                });
            }, 1000);
        } else {
            if (interval) clearInterval(interval);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isRunning, timer, selectedPomodoro]);

    const handleStartStop = () => {
        setIsRunning(!isRunning);
        if (!isRunning) setTimer(0); // Resetear el temporizador al iniciar
    };

    const formatTime = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <SafeAreaView style={styles.container}>
            <Picker
                selectedValue={selectedPomodoro}
                onValueChange={(itemValue, itemIndex) => setSelectedPomodoro(pomodoroOptions[itemIndex])}
                style={{ width: 200, height: 180 }}
            >
                {pomodoroOptions.map(option => (
                    <Picker.Item key={option.id} label={`${option.focusTime} min focus, ${option.breakTime} min break`} value={option} />
                ))}
            </Picker>
            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{formatTime()}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleStartStop}>
                <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Start'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    timerContainer: {
        margin: 20
    },
    timerText: {
        fontSize: 48,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
});

export default DataTimePicker;
