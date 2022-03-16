import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DummyDoctor1 } from '../../assets';
import { Headers, List } from '../../components';
import { colors } from '../../utils';

const ChooseDoctor = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Headers type='dark' title="Pilih Dokter Anak" onPress={() => navigation.goBack()} />
            <List type="next" profile={DummyDoctor1} name="Alexander Jannie" desc="Wanita" onPress={() => navigation.navigate("Chatting")} />
            <List type="next" profile={DummyDoctor1} name="Alexander Jannie" desc="Wanita" />
            <List type="next" profile={DummyDoctor1} name="Alexander Jannie" desc="Wanita" />
            <List type="next" profile={DummyDoctor1} name="Alexander Jannie" desc="Wanita" />
            <List type="next" profile={DummyDoctor1} name="Alexander Jannie" desc="Wanita" />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
});

export default ChooseDoctor;
