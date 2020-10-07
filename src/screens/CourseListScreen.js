import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const CourseListScreen = (props) => {
    const semester = props.route.params.semester_selected;
    const first_sem_course_lists = [
        { name: " Islamiat", key: '1' },
        { name: " Technology, Environment and Society", key: '2' },
        { name: " Geometry and Differential Calculus", key: '3' },
        { name: " Physics II", key: '4' },
        { name: " Structured Programming I", key: '5' },
        { name: " Introduction to Software Engineering", key: '6' },
    ];
    const second_sem_course_lists = [
        { name: " Accounting ", key: '1' },
        { name: " Business Psychology and Communications ", key: '2' },
        { name: " Discrete Mathematics ", key: '3' },
        { name: " Object Oriented Concepts I", key: '4' },
        { name: " Digital Logic Design", key: '5' },
        { name: " Integral Calculus and Differential Equations", key: '6' }
    ]
    const third_sem_course_lists = [
        { name: " Computer Organization and Architecture", key: '1'},
        { name: " Linear Algebra", key: '2'},
        { name: " Data Structures", key: '3'},
        { name: " Database Management System ", key: '4'},
        { name: " Theory of Computing ", key: '5'},
        { name: " Object Oriented Concepts II", key: '6'},
    ]
    let course_lists= [];
    let semester_name = "";
    if (semester == "1st")
    {
        course_lists = first_sem_course_lists;
        semester_name = 'First Semester';
    }
    else if (semester == "2nd")
    {
        course_lists = second_sem_course_lists;
        semester_name = 'Second Semester';
    }
    else if(semester == "3rd")
    {
        course_lists = third_sem_course_lists;
        semester_name = 'Third Semester';
    }
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle2}>{semester_name} </Text>
            <FlatList
                data = {course_lists}
                renderItem = {function({item}){
                    return <Text style={styles.textStyle}>{item.key}:{item.name} </Text>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        viewStyle: {
            justifyContent: 'center',
            backgroundColor: '#f2fbff'
        },
        textStyle: {
            fontSize: 30,
            margin: 30,
            color:"#50a8e0",
            paddingBottom:25
        },
        textStyle2: {
            textAlign: 'center',
            fontSize: 40,
            fontWeight: "bold",
            color: '#6f3d92',
            marginBottom: 20,
            marginTop: 50,
            margin: 10
        },
    }
);

export default CourseListScreen;