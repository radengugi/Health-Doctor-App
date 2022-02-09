import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ILImageDefault } from '../../assets';
import { Headers } from '../../components';

const UploadPhoto = () => {
    return (
        <View style={styles.container}>
            <Headers title="Upload Photo" />
            <View>
                <Image source={ILImageDefault} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
});

export default UploadPhoto;
