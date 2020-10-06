import React from "react";
import {Text, View, StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const CourseListScreen = () =>
{
    const uni = [
        {name: "IUT", key: "1"},
        {name: "BUET", key: "2"},
        {name: "SUST", key: "3"},
        {name: "RUET", key: "4"},
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
            fontSize: 30,
            color:'blue',
            marginVertical: 30,
        },
        viewStyle:
        {
            borderColor: 'red',
            backgroundColor: 'black',
            borderWidth: 5,
        }
    }
);

export default CourseListScreen;