import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { Button, StyleSheet, Text, View } from 'react-native';


class ListofCompanies extends Component {
    render(){
        return (
            <View  style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>List of Companies</Text>
            </View>
        );
    }
}

export default ListofCompanies