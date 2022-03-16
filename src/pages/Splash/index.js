import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { Fire } from '../../config';
import { colors, fonts } from '../../utils';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            Fire.auth()
                .onAuthStateChanged((user) => {
                    if (user) {
                        console.log("Login : ", user)
                        navigation.replace("MainApp")
                    } else {
                        navigation.replace('GetStarted')
                    }
                })
        }, 3000)
    }, [])
    return (
        <View style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>Health Doctor</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 20
    }
});

export default Splash;
