import React from "react";
import { Text, StyleSheet, Button, View, Image, TouchableOpacity } from "react-native";

const Profile = (props) => {
    return (
        <View style= {styles.viewStyle}>
            <Image style={styles.imageStyle} source={require("./../../assets/myPic.jpg")}/>
            <Text style={styles.textStyle}>Name: Sakibul Islam Munna</Text>
            <Text style={styles.textStyle}>ID: 170042060</Text>
            <Text style={styles.textStyle}>Room No: 501, South</Text>
            <Text style={styles.textStyle}>Email: sakibul.munnaa@gmail.com</Text>
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
            fontSize: 30,
            margin: 10,
            color:"#50a8e0",
        },
        imageStyle: {
            alignSelf: 'center',
            height: 400,
            width: 300,
            margin: 10,
            marginBottom: 50
        }
    }
);

export default Profile;