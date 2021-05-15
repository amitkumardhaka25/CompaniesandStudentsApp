import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { Button, StyleSheet,TextInput, Text, View } from 'react-native';


const style = {
    inputname:{
        borderWidth:1, 
        borderBottomColor:'#000', 
        height: 20,
        maxLength:30,            
        minWidth:200,
        alignItems:'flex-end'
    },
    
}

class AddnewCompany extends Component {
    render(){
        return (
            <View  style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>Add new Company</Text>
                <View style={{flexDirection:'row', margin:10, }}>
                    <TextInput editable maxLength={20} 
                    style={style.inputname}
                    placeholder="Name" ></TextInput>
                </View>
                <View style={{flexDirection:'row', margin:10, }}>
                    <TextInput editable maxLength={20} 
                    style={style.inputname}
                    placeholder="Email Address"></TextInput>
                </View>
                <View style={{flexDirection:'row', margin:10}}>
                    <TextInput editable maxLength={50} 
                    style={style.inputname}
                    placeholder="Address"></TextInput>
                </View>
                <View style={{flexDirection:'row', margin:10}}>
                    <TextInput editable maxLength={20} 
                    style={style.inputname}
                    placeholder="Company's Website Link"></TextInput>
                </View>    
                <View style={{flexDirection:'row', margin:10}}>
                    <TextInput editable maxLength={20} 
                    style={style.inputname}
                    placeholder="Number of Employees"></TextInput>
                </View> 
                <View style={{flexDirection:'row', margin:10}}>
                    <TextInput editable  
                    style={style.inputname}
                    placeholder="Name of Employees"></TextInput>
                </View>      
            </View>
        );
    }
}

export default AddnewCompany