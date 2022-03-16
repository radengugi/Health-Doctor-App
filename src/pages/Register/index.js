import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { showMessage } from "react-native-flash-message";
import { Button, Gap, Headers, Input, Loading } from '../../components';
import { Fire } from '../../config';
import { storeData, useForm } from '../../utils';
import { colors } from '../../utils/colors';

const Register = ({ navigation }) => {

    const [form, setForm] = useForm({
        fullName: '',
        profession: '',
        email: '',
        password: '',
    })

    const [loading, setLoading] = useState(false)

    const onContinue = () => {
        console.log(form)
        setLoading(true)
        Fire.auth()
            .createUserWithEmailAndPassword(form.email, form.password)
            .then((success) => {
                setLoading(false)
                setForm("reset")

                const data = {
                    fullName: form.fullName,
                    profession: form.profession,
                    email: form.email,
                    uid: success.user.uid
                }

                Fire.database()
                    .ref("users/" + success.user.uid + "/")
                    .set(data);

                storeData("user", data)
                navigation.navigate("UploadPhoto", data)
                console.log("Success Register :", success)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoading(false)
                showMessage({
                    message: errorMessage,
                    type: 'success',
                    backgroundColor: colors.error,
                    color: colors.white,
                })
                console.log("Error : ", error)
            });
    }

    return (
        <>
            <View style={styles.page}>
                <Headers onPress={() => navigation.goBack()} title="Daftar Akun" />
                <View style={styles.content}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Input label="Full Name" value={form.fullName} onChangeText={(val) => setForm("fullName", val)} />
                        <Gap height={24} />
                        <Input label="Pekerjaan" value={form.profession} onChangeText={(val) => setForm("profession", val)} />
                        <Gap height={24} />
                        <Input label="Email Address" value={form.email} onChangeText={(val) => setForm("email", val)} />
                        <Gap height={24} />
                        <Input label="Password" value={form.password} onChangeText={(val) => setForm("password", val)} secureTextEntry />
                        <Gap height={40} />
                        <Button title="Continue " onPress={onContinue} />
                    </ScrollView>
                </View>
            </View>
            {loading && <Loading />}
        </>
    );
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})

export default Register;
