import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { Button, StyleSheet, Text, View } from 'react-native';


class Main extends Component {

    

    render(){
        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{marginVertical:10}}>Choose one option :</Text>
                <View style={{marginVertical:10}}> 
                    <Button title="Add New Student" 
                    onPress={()=>this.props.navigation.navigate('AddnewStudent')}></Button>
                </View>
                <View style={{marginVertical:10}}>
                    <Button title="Add New Company" 
                    onPress={()=>this.props.navigation.navigate('AddnewCompany')}></Button>
                </View>
                <View style={{marginVertical:10}}>
                    <Button title="List of Students" 
                    onPress={()=>this.props.navigation.navigate('ListofStudents')}></Button>
                </View>
                <View style={{marginVertical:10}}>
                    <Button title="List of Companies" 
                    onPress={()=>this.props.navigation.navigate('ListofCompanies')}></Button>
                </View>
            </View>
        );
    }
}

export default Main