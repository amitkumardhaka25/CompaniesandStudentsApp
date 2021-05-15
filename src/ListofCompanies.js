import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { Button, StyleSheet, Text, View } from 'react-native';

var CompaniesList = [
    {name:"Field Genie", email:"info@fieldgenie.com",
    address:"Houston, USA", website:"https://fieldgenie.com/",
    numberofemployees:1, employees:["Amit Kumar"]},
    {name:"Oracle", email:"copyright_us@oracle.com",
    address:"Redwood Shores, CA 94065", website:"https://www.oracle.com/in/index.html",
    numberofemployees:1, employees:["Amit Meena"]},
    ]

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