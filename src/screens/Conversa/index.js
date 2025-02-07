import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Image } from 'react-native';
import * as Speech from 'expo-speech';
import * as Animatable from 'react-native-animatable'

export default function Conversa() {
    const [text, setText] = useState("Bem vindo ao Your Slum");

    function speak() {
        Speech.speak(text, {
            language: 'pt-BR',
        });
    }

    return (
        <View style={styles.container}>

            <View>
                <Animatable.Image
                    source={require('../../../assets/logo.png')}
                    style={styles.logo}>
                </Animatable.Image>
            </View>

            <TextInput
                style={styles.input}
                onChangeText={e => setText(e)}
                placeholder="write here :)"
            />

            <Button
                title="Speak"
                color="red"
                fontWeight='bold'
                onPress={speak}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '90%',
        height: 70,
        borderWidth: 1,
        borderColor: '#121212',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        color: '#000',
        fontSize: 20,
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 40,
        marginTop: 0.9,
        justifyContent: "center",
        alignItems: 'center',
    }
})