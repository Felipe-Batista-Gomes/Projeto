import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Animacao() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Animatable.Image 
              animation='flipInY'
              source={require('../../../assets/logo.png')}
              style={{ width: '60%'}}
              resizeMode="contain"
            />
        </View>

        <Animatable.View delay={800} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>Bem Vindo ao Your Slum!</Text>
            <Text style={styles.text}>Para iniciarmos clique em Acessar</Text>

            <TouchableOpacity 
            style={styles.button}
            onPress={() =>
                 navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'orange'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#orange',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    containerForm: {
        flex: 1,
        backgroundColor:'#FFF',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingStart: '10%',
        paddingEnd: '10%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 15,
    },
    text: {
        color: 'black',
        marginBottom: 30,
        fontWeight: 'bold'
    },
    button: {
        posicion: 'absolute',
        backgroundColor: 'orange',
        borderRadius: 25,
        paddingVertical: 15,
        width: '60%',
        alignSelf: 'center',
        bottom: '1%',
        alignItems: "center",
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold'
    }       
})