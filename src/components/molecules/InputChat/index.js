import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Button } from '../..';
import { colors, fonts } from '../../../utils';

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" />
            <Button type="btn-icon-send" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
    },
    input: {
        backgroundColor: colors.disable,
        padding: 14,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        maxHeight: 45
    },
});

export default InputChat;
