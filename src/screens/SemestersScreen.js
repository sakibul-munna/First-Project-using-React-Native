import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const SemestersScreen = (props) => {
    const uni = [
        { name: "1st", key: "1" },
        { name: "2nd", key: "2" },
        { name: "3rd", key: "3" },
    ];
    let semester_selected = "";

    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity 
                onPress={function () {
                    semester_selected = "1st";
                    props.navigation.navigate("CourseListScreen",{semester_selected});
                }}>
                <Text style={styles.textStyle2}>1st Semester</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={function () {
                    semester_selected = "2nd";
                    props.navigation.navigate("CourseListScreen",{semester_selected});
                }}>
                <Text style={styles.textStyle2}>2nd Semester</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={function () {
                    semester_selected = "3rd";
                    props.navigation.navigate("CourseListScreen",{semester_selected});
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
            paddingBottom:40,
            paddingTop:40,
            textAlign: 'center',
            fontSize: 50,
            fontWeight: "bold",
            color: '#97c4f5',
            margin: 80,
        },
    }
);

export default SemestersScreen;