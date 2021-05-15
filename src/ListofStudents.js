import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { Button, StyleSheet, Text, View } from 'react-native';


class ListofStudents extends Component {
    render(){
        return (
            <View  style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>List of Students</Text>
            </View>
        );
    }
}

export default ListofStudents