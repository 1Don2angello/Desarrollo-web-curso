import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker'; // Ensure this dependency is installed
import pomodoroOptions from "../components/pomodoro/pomodoroOptions"; // Ensure the path and file are correct

interface PomodoroOption {
    id: number;
    focusTime: number;
    breakTime: number;
}

const DataTimePicker = () => {
    const [selectedPomodoro, setSelectedPomodoro] = useState<PomodoroOption>(pomodoroOptions[0]);
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
        // No reset timer on start/stop
    };

    const handleReset = () => {
        setIsRunning(false);
        setTimer(0); // Reset the timer to 0
    };

    const formatTime = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Picker
                    selectedValue={selectedPomodoro}
                    onValueChange={(itemValue: PomodoroOption, itemIndex: number) => setSelectedPomodoro(pomodoroOptions[itemIndex])}
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
                <TouchableOpacity style={styles.button} onPress={handleReset}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </ScrollView>
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
    scrollView: {
        alignItems: 'center',
        justifyContent: 'center'
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
        borderRadius: 5,
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
});

export default DataTimePicker;
