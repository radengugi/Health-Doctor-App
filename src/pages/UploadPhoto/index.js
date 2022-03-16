import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { IconAddPhoto, IconRemovePhoto, ILImageDefault } from '../../assets';
import { Button, Gap, Headers, Link } from '../../components';
import { colors, fonts, storeData } from '../../utils';
import { showMessage } from 'react-native-flash-message';
import { Fire } from '../../config';

const UploadPhoto = ({ navigation, route }) => {
    const { fullName, profession, uid } = route.params

    const [hasPhoto, setHasPhoto] = useState(false)
    const [photo, setPhoto] = useState(ILImageDefault)
    const [photoForDB, setPhotoForDB] = useState("")

    const getImage = () => {
        launchImageLibrary(
            {
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
                    setHasPhoto(true)
                }
            }
        )
    }

    const uploadAndContinue = () => {
        Fire.database()
            .ref("users/" + uid + "/")
            .update({ photo: photoForDB });
        const data = route.params;
        data.photo = photoForDB;

        storeData('user', data)
        navigation.replace("MainApp")
    }

    return (
        <View style={styles.page}>
            <Headers title="Upload Photo" />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
                        <Image source={photo} style={styles.avatar} />
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
                    </TouchableOpacity>
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.profession}>{profession}</Text>
                </View>
                <View>
                    <Button disable={!hasPhoto} title="Upload and Continue" onPress={uploadAndContinue} />
                    <Gap height={30} />
                    <Link title="Skip for this" align="center" size={16} onPress={() => navigation.replace("MainApp")} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: 'space-between'
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4
    }
});

export default UploadPhoto;
