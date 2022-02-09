import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { fonts } from '../../../utils';
import { colors } from '../../../utils/colors';

const Input = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        padding:12
    },
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6,
        fontFamily: fonts.primary[400]
    }
})

export default Input;
