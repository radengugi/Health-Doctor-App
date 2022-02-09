import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap } from '../..';
import { fonts } from '../../../utils';
import { colors } from '../../../utils/colors';

const Headers = ({ onPress, title }) => {
    return (
        <View style={styles.container}>
            <Button type='icon-only' icon="back-dark" onPress={onPress} />
            <Text style={styles.text}>{title}</Text>
            <Gap width={24} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
});

export default Headers;
