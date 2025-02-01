import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function Animacao() {
    return (
        <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Image 
              source={require('../../../assets/logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
        </View>

        <View style={styles.containerForm}>
            <Text style={styles.title}>Abada</Text>
            <Text style={styles.text}>JAJAJJA</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex:1,
        backgroundColor:'#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold'
    }       
})