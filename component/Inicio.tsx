import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Inicio = ({ navigation }: { navigation: NavigationProp<any> }) => {
 

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/react.png')} style={styles.logo} />
                <Text>Desarrollo Movil I</Text>
                 <Text>Nombre Estudiante: Alba Zuniga</Text>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    logo: {
        width: '50%',
        height: undefined,
        aspectRatio: 1,
        marginBottom: 30,
        alignSelf: 'center',
    },
});

export default Inicio;