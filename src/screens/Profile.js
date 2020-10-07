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
            textAlign: 'left',
            fontSize: 30,
            margin: 10,
            color:"#50a8e0",
            paddingBottom: 12
        },
        imageStyle: {
            marginTop: 30,
            alignSelf: 'center',
            height: 500,
            width: 400,
            margin: 10,
            marginBottom: 50
        },
    }
);

export default Profile;