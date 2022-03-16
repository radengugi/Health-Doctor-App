import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ILLogo } from '../../assets';
import { Button, Gap, Input, Link, Loading } from '../../components';
import { fonts, useForm, colors, storeData } from '../../utils';
import { Fire } from "../../config"
import { showMessage } from 'react-native-flash-message';

const Login = ({ navigation }) => {
    const [form, setForm] = useForm({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)

    const login = () => {
        console.log("Data Form : ", form)
        setLoading(true)
        Fire.auth()
            .signInWithEmailAndPassword(form.email, form.password)
            .then(res => {
                console.log("Success Login : ", res);
                setLoading(false)
                Fire.database()
                    .ref(`users/${res.user.uid}/`)
                    .once('value') //Hanya melakukan pemanggilan 1x
                    .then(resDB => {
                        console.log("Data User : ", resDB.val())
                        if (resDB.val()) {
                            storeData('user', resDB.val()); //Penyimpanan ke Local Storage
                            navigation.replace("MainApp");
                        }
                    })
            })
            .catch(err => {
                console.log("Error : ", err);
                setLoading(false)
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white
                })
            })
    }

    return (
        <>
            <View style={styles.page}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap height={40} />
                    <ILLogo />
                    <Text style={styles.title} >Masuk dan mulai berkonsultasi</Text>
                    <Input label="Email Address" value={form.email} onChangeText={val => setForm('email', val)} />
                    <Gap height={24} />
                    <Input label="Password" value={form.password} onChangeText={val => setForm('password', val)} secureTextEntry />
                    <Gap height={10} />
                    <Link title="Forgot My Password" size={12} />
                    <Gap height={40} />
                    <Button title="Sign In" onPress={login} />
                    <Gap height={30} />
                    <Link title="Create New Account" size={16} align="center" onPress={() => navigation.navigate("Register")} />
                </ScrollView>
            </View>
            {loading && <Loading />}
        </>
    );
};

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 40,
        backgroundColor: colors.white,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153
    }
})

export default Login;
