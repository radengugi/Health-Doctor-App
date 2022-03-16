import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap, Headers, Profile, ProfileItem } from "../../components"
import { colors } from '../../utils';

const DoctorProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Headers title="Doctor Profile" onPress={() => navigation.goBack()} />
            <Profile name="Nazia Kayla" desc="Dokter Anak" />
            <Gap height={10} />
            <ProfileItem label="Alumnus" value="Universitas Indonesia, 2022" />
            <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
            <ProfileItem label="No. STR" value="0000116622081996" />
            <View style={styles.action}>
                <Button title="Start Consultation" onPress={() => navigation.navigate("Chatting")} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    action: {
        paddingHorizontal: 40,
        paddingTop: 23
    },
});

export default DoctorProfile;
