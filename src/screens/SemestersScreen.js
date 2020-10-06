import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const SemestersScreen = (props) => {
    const uni = [
        { name: "1st", key: "1" },
        { name: "2nd", key: "2" },
        { name: "3rd", key: "3" },
    ];
    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity
                onPress={function () {
                    props.navigation.navigate("Profile");
                }}>
                <Text style={styles.textStyle2}>1st Semester</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={function () {
                    props.navigation.navigate("Profile");
                }}>
                <Text style={styles.textStyle2}>2nd Semester</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={function () {
                    props.navigation.navigate("Profile");
                }}>
                <Text style={styles.textStyle2}>3rd Semester</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        viewStyle: {
            justifyContent: 'center',
            backgroundColor: '#f2fbff'
        },
        textStyle2: {
            alignSelf: 'center',
            fontSize: 48,
            color: '#97c4f5',
            margin: 97,
        },
    }
);

export default SemestersScreen;