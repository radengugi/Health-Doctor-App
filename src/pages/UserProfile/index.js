import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ILImageDefault } from '../../assets';
import { Gap, Headers, List, Profile } from "../../components";
import { getData } from '../../utils';

const UserProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        profession: '',
        photo: ILImageDefault
    })

    useEffect(() => {
        getData("user")
            .then(res => {
                const data = res;
                data.photo = { uri: res.photo };
                setProfile(data);
            })
    }, [])

    return (
        <View style={styles.container}>
            <Headers title="Profile" onPress={() => navigation.goBack()} />
            <Gap height={10} />
            {
                profile.fullName.length > 0 &&
                <Profile name={profile.fullName} desc={profile.profession} photo={profile.photo} />
            }
            <Gap height={14} />
            <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile" onPress={() => navigation.navigate("UpdateProfile")} />
            <List name="Languange" desc="Last Update Yesterday" type="next" icon="languange" />
            <List name="Give Us Rate" desc="Last Update Yesterday" type="next" icon="rate" />
            <List name="Help Center" desc="Last Update Yesterday" type="next" icon="help" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default UserProfile;
