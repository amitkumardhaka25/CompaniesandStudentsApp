import React, { Component, useState } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { Button, StyleSheet, Text, View } from 'react-native';

var StudentsList = [
    {name:"Amit Kumar", email:"amit.kumar.ece17@itbhu.ac.in", 
    address:"Jalalsar, Rajasthan", company: "Field Genie"},
    {name:"Amit Meena", email:"amit.meena.eee17@itbhu.ac.in", 
    address:"Nawalgarh, Rajasthan", company:"Oracle"}];


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