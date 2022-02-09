import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ILLogo } from '../../assets';
import { fonts } from '../../utils';
import { colors } from '../../utils/colors';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted')
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
