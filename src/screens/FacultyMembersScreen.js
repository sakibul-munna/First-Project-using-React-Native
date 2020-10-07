import React from "react";
import {Text, View, StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const FacultyMembersScreen = () =>
{
    const uni = [
        {name: "1: Mohayeminul Islam", key: "1"},
        {name: "2: Ridwan Kabir", key: "2"},
        {name: "3: Bakhtiar Hasan", key: "3"},
        {name: "4: Md. Mohsinul Kabir", key: "4"},
        {name: "5: Tasnim Ahmed", key: "5"},
        {name: "6: Fardin Saad", key: "6"}
    ];
    return(
        <View style = {styles.viewStyle}>
            <FlatList
                data = {uni}
                renderItem = {function({item}){
                    return <Text style={styles.textStyle}>{item.name}</Text>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyle: 
        {
            fontSize: 35,
            paddingTop: 30,
            paddingBottom: 30,
            color:"#50a8e0",
            margin: 20,
            marginVertical: 20,
        },
        viewStyle:
        {
            backgroundColor: '#f2fbff',
        }
    }
);

export default FacultyMembersScreen;