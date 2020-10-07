import React from "react";
import { Text, StyleSheet, Button, View, Image, TouchableOpacity } from "react-native";


const HomeScreen = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Image style={styles.imageStyle} source={require("./../../assets/iutLogo.jpg")}
            />
            <Text style={styles.textStyle}>Department of CSE</Text>
            <Text style={styles.textStyle}>Program: SWE</Text>
            <TouchableOpacity
                onPress={function () {
                    props.navigation.navigate("Profile");
                }}>
                <Text style={styles.textStyle2}>My Profile</Text>
            </TouchableOpacity>
            <View style = {styles.buttonStyle}>
                <Button title="Semester Wise Course List" style={styles.buttonStyle} onPress={
                    function () {
                        props.navigation.navigate("SemestersScreen");
                    }
                } />
            </View>
            <View style = {[{margin: 50, paddingTop: 20, marginBottom: 110, fontSize: 30,}]}>
                <Button title="List of Faculty Members" style={styles.buttonStyle} onPress={
                    function () {
                        props.navigation.navigate("FacultyMembersScreen");
                    }
                } />
            </View>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        viewStyle: {
            justifyContent: 'center',
            backgroundColor: '#f2fbff'
        },
        textStyle: {
            alignSelf: 'center',
            fontSize: 30,
            color: 'black',
            margin: 10,
        },
        textStyle2: {
            alignSelf: 'center',
            fontSize: 40,
            color: 'red',
            marginBottom: 40,
            marginTop: 50,
            margin: 10
        },
        imageStyle: {
            alignSelf: 'center',
            margin: 10,
            marginVertical: 30,
        },
        buttonStyle: {
            paddingTop: 30,
            margin: 50,
            fontSize: 20,
        }
    }
);

export default HomeScreen;