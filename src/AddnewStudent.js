import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { Button, Picker, StyleSheet, Text, TextInput, View } from 'react-native';
import LinearLayout from 'react-linear-layout';

const style = {
    container:{
        flex:1, alignItems:'center', justifyContent:'center'
    },
    inputname:{
        borderWidth:1, 
        borderBottomColor:'#000', 
        height: 20,
        maxLength:30,            
        minWidth:200,
        alignItems:'flex-end'
    },
    inputaddress:{
        borderWidth:1, 
        borderBottomColor:'#000', 
        height: 20,
        maxLength:30,            
        minWidth:200,
        alignSelf:'flex-end'
    }
}

class AddnewStudent extends Component {


    render(){
        return (
            <View  style={style.container}>
                <Text>Add new Student</Text>
                <View style={{flexDirection:'row', margin:10, }}>
                    <Text style={{}}>Name: </Text>
                    <TextInput editable maxLength={20} style={style.inputname}></TextInput>
                </View>
                <View style={{flexDirection:'row', margin:10}}>
                    <Text style={{alignSelf:'flex-start'}}>Address: </Text>
                    <TextInput editable maxLength={20} style={style.inputaddress}></TextInput>
                </View>
                <View style={{flexDirection:'row', margin:10}}>
                    <Text style={{alignSelf:'flex-start'}}>Company: </Text>
                    <Picker style={{ height: 50, width: 150, borderWidth:1, borderBottomColor:'#000',}}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
            </View>
        );
    }
}

export default AddnewStudent