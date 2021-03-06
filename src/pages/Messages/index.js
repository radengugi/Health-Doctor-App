import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DummyDoctor4, DummyDoctor5, DummyDoctor6 } from '../../assets';
import { List } from '../../components';
import { colors, fonts } from '../../utils';

const Messages = ({navigation}) => {
    const [doctors, setDoctors] = useState([
        {
            id: 1,
            profile: DummyDoctor4,
            name: "Dian Ratnasari",
            desc: "Baik bu, terima kasih banyak atas wakt..."
        },
        {
            id: 2,
            profile: DummyDoctor5,
            name: "Nairobi Putri Hayza",
            desc: "Oh tentu saja tidak karena jeruk it..."
        },
        {
            id: 3,
            profile: DummyDoctor6,
            name: "John McParker Steve",
            desc: "Oke menurut pak dokter bagaimana unt..."
        },
    ])
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.text}>Messages</Text>
                {
                    doctors.map((row, i) => {
                        return (
                            <List key={row.id} profile={row.profile} name={row.name} desc={row.desc} onPress={()=>navigation.navigate("Chatting")} />
                        )
                    })
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    text: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16
    }
});

export default Messages;
