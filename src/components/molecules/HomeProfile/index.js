import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { DummyUser, ILImageDefault } from '../../../assets';
import { colors, fonts, getData } from '../../../utils';

const HomeProfile = ({ onPress }) => {
    const [profile, setProfile] = useState({
        photo: ILImageDefault,
        fullName: '',
        profession: ''
    })

    useEffect(() => {
        getData('user')
            .then(res => {
                // console.log("Data User : ", res);
                const data = res;
                data.photo = { uri: res.photo }
                console.log("Photo : ", data)
                setProfile(res);
            })
    }, [])

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.avatar} />
            <View>
                <Text style={styles.name}>{profile.fullName}</Text>
                <Text style={styles.profession}>{profile.profession}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textTransform:'capitalize'
    },
    profession: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        textTransform:'capitalize'
    }
});

export default HomeProfile;