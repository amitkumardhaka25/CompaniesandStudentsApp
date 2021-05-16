import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { Button, StyleSheet,TextInput, Text, View } from 'react-native';


const style = {
    inputname:{
        borderWidth:1,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height: 30,
        minWidth:200,     
        paddingHorizontal:10   
    },
    submit:{
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    }
   
    
}

class AddnewCompany extends Component {

    state={
        name:'',
        email:'',
        address:'',
        numberofemployees:0,
        websitelink:'',
        employees:[]
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
    handleNumberofemployees=(text)=>{
        this.setState({numberofemployees:text})
    }
    handleWebsitelink=(text)=>{
        this.setState({websitelink:text})
    }
    handleEmployees=(text)=>{
        this.setState({employees:text})
    }
    Addnewcompanyinthelist=(name, email, address, websitelink, numberofemployees, employees)=>{

        alert('name: '+ name + 'email: ' + email + 'address: ' + address + 'website link: ' + websitelink + 
        'numberofemployees: ' + numberofemployees + 'employees: ' + employees);
        this.setState({employees:''})
    }


    render(){
        return (
            <View  style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>Add new Company</Text>
                <View style={{flexDirection:'row', margin:10, }}>
                    <TextInput editable maxLength={20} 
                    style={style.inputname}
                    placeholder="Name"
                    onChangeText={this.handleName} ></TextInput>
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
                <View style={{flexDirection:'row', margin:10}}>
                    <TextInput editable maxLength={20} 
                    style={style.inputname}
                    placeholder="Company's Website Link"
                    onChangeText={this.handleWebsitelink}></TextInput>
                </View>    
                <View style={{flexDirection:'row', margin:10}}>
                    <TextInput editable maxLength={20} 
                    style={style.inputname}
                    placeholder="Number of Employees"
                    onChangeText={this.handleNumberofemployees}></TextInput>
                </View> 
                <View style={{flexDirection:'row', margin:10}}>
                    <TextInput editable  
                    style={style.inputname}
                    placeholder="Name of Employees" 
                    onChangeText={this.handleEmployees}></TextInput>
                </View>     
                <View> 
                    <Button style={style.submit} 
                    title="Submit" 
                    onPress={()=>this.Addnewcompanyinthelist(
                        this.state.name, this.state.email,
                        this.state.address, this.state.websitelink,
                        this.state.numberofemployees, this.state.employees
                    )}></Button>
                </View>
            </View>
        );
    }
}

export default AddnewCompany