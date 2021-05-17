import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import {Picker} from '@react-native-picker/picker';
import ModalDropdown from 'react-native-modal-dropdown';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import LinearLayout from 'react-linear-layout';

const style = {
    container:{
        flex:1, alignItems:'center', justifyContent:'center'
    },
    inputname:{
        borderWidth:1,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height: 30,
        width:200,
        paddingHorizontal:10 
    },
    submit:{
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    }
   

}





class AddnewStudent extends Component {
   

    state={
        name:'',
        email:'',
        address:'',
        company:'',
    }
    handleName=(text)=>{
        this.setState({name:text})
    }
    handleEmail=(text)=>{
        this.setState({email:text})
    }
    handleAddress=(text)=>{
        this.setState({address:text})
    }
    handleCompany=(text)=>{
        this.setState({company:text})
    }
    
    Addnewstudentinthelist=(name, email, address, company)=>{
        var newList = [name, email, address, company];
        this.props.navigation.navigate('Main', {newStudent:newList});
    }




    render(){      
        const state = this.state;  
        const list = this.props.navigation.getParam('list');

        let companyoptions = list.map((item)=><Picker.Item label={item} value={item}></Picker.Item>)

        return (
            <View  style={style.container}>
                <Text>Add new Student</Text>
                <View style={{flexDirection:'row', margin:10, }}>
                    <TextInput editable maxLength={20} 
                    style={style.inputname}
                    placeholder="Name" 
                    onChangeText={this.handleName}></TextInput>
                </View>
                <View style={{flexDirection:'row', margin:10, }}>
                    <TextInput editable maxLength={20} 
                    style={style.inputname}
                    placeholder="Email Address"
                    onChangeText={this.handleEmail}></TextInput>
                </View>
                <View style={{flexDirection:'row', margin:10}}>
                    <TextInput editable maxLength={50} 
                    style={style.inputname}
                    placeholder="Address"
                    onChangeText={this.handleAddress}></TextInput>
                </View>
                <View style={{flexDirection:'row', margin:10, borderWidth:1, borderRadius:5}}>
                <Picker
                    style={{ height: 30, width: 200 }}
                    onValueChange={this.handleCompany}>
                    <Picker.Item label="Select Here" value="" />
                    {companyoptions}
                </Picker>
                </View>
                <View>
                    <Button style={style.submit} 
                        title="Submit" 
                        onPress={()=>this.Addnewstudentinthelist(
                        state.name, state.email,
                        state.address, state.company
                    )}></Button>
                </View>
            </View>
        );
    }
}

export default AddnewStudent