import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Gap, Headers, Input, Profile } from '../../components';
import { colors, getData, storeData } from '../../utils';
import { Fire } from "../../config"
import { showMessage } from 'react-native-flash-message';
import ImagePicker, { launchImageLibrary } from 'react-native-image-picker';
import { ILImageDefault } from '../../assets';

const UpdateProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        profession: '',
        email: '',
    })
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState(ILImageDefault);
    const [photoForDB, setPhotoForDB] = useState('')

    useEffect(() => {
        getData("user")
            .then(res => {
                const data = res;
                setPhoto({ uri: res.photo });
                setProfile(data)
            })
    }, [])

    const update = () => {
        console.log("Update : ", profile)
        const data = profile;
        data.photo = photoForDB;
        Fire.database()
            .ref(`users/${profile.uid}/`)
            .update(data)
            .then(res => {
                console.log("Success Update : ", res)
                storeData('user', data)
                // navigation.goBack("UserProfile")
            })
            .catch(err => {
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white
                })
            })
    }

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value
        })
    }

    const getImage = () => {
        launchImageLibrary({
            quality: 0.5,
            maxWidth: 200,
            maxHeight: 200,
            // includeBase64: true
        },
            response => {
                console.log("Response : ", response);
                if (response.didCancel || response.error) {
                    showMessage({
                        message: "Anda belum meilih foto !",
                        backgroundColor: colors.error,
                        color: colors.white,
                        type: "default",
                    });
                } else {
                    console.log("Response getImage : ", response)
                    setPhotoForDB(`data:${response.type};base64, ${response.data}`)
                    const source = { uri: response.uri };
                    setPhoto(source)
                }
            })
    }

    return (
        <View style={styles.container}>
            <Headers title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile isRemove photo={photo} onPress={getImage} />
                    <Gap height={26} />
                    <Input label="Full Name" value={profile.fullName} onChangeText={(val) => changeText("fullName", val)} />
                    <Gap height={24} />
                    <Input label="Pekerjaan" value={profile.profession} onChangeText={(val) => changeText("profession", val)} />
                    <Gap height={24} />
                    <Input label="Email" value={profile.email} disable />
                    <Gap height={24} />
                    <Input label="Password" value={password} onChangeText={(val) => setPassword(val)} />
                    <Gap height={40} />
                    <Button title="Save Profile" onPress={update} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0
    },
});

export default UpdateProfile;
