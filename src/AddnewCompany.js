import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { Button, StyleSheet,TextInput, Text, View, Alert, ScrollView } from 'react-native';
import NumericInput from 'react-native-numeric-input'


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
    },
   
    
}
const emailvalidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var urlpattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator


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
        var newList = [name, email, address, websitelink, numberofemployees, employees];
        var totalemployees = 0;
        for(var i=0;i<employees.length;i++){
            if(employees[i]===','){
                totalemployees++;
            }
        }if(name.length<4){
            alert('Please Add Company Name Correctly !')
        }
        else if(emailvalidator.test(email)===false){
            alert('Please Enter Email Correctly !')
        }else if(address.length<4){
            alert('Please Add Address !')
        }else if(urlpattern.test(websitelink)===false){
            alert('Please Enter valid Website Link !')
        }else if(totalemployees!=numberofemployees-1){
           alert('Enter Employees Correctly !')
        }else if(numberofemployees===1&&employees===''){
            alert('Add an Employee !');
        }
        else{
            this.props.navigation.navigate('Main', {newCompany:newList});
        }
    }


    render(){
        return (
            <View  style={{flex:5, alignItems:'center', justifyContent:'center', marginTop:50}}>
                <Text style={{fontSize:20, fontStyle:'italic', color:'red'}}>Add new Company</Text>
                <ScrollView style={{flex:1, marginTop:20}}>
                <View style={{margin:10, }}>
                <Text style={{marginBottom:5, alignSelf:'center'}}>Company Name</Text>
                    <TextInput editable  
                    style={style.inputname}
                    placeholder="Name"
                    onChangeText={this.handleName} ></TextInput>
                </View>
                <View style={{ margin:10, }}>
                <Text style={{marginBottom:5, alignSelf:'center'}}>Enter Email</Text>
                    <TextInput editable 
                    style={style.inputname}
                    placeholder="Email Address"
                    onChangeText={this.handleEmail}></TextInput>
                </View>
                <View style={{margin:10}}>
                <Text style={{marginBottom:5, alignSelf:'center'}}>Enter Address</Text>
                    <TextInput editable 
                    style={style.inputname}
                    placeholder="Address"
                    onChangeText={this.handleAddress}></TextInput>
                </View>
                <View style={{ margin:10}}>
                <Text style={{marginBottom:5, alignSelf:'center'}}>Enter Website Link</Text>
                    <TextInput editable  
                    style={style.inputname}
                    placeholder="Company's Website Link"
                    onChangeText={this.handleWebsitelink}></TextInput>
                </View>    
                <View style={{margin:10}}>
                    <Text style={{marginBottom:5, alignSelf:'center'}}>Number of Employees</Text>
                    <NumericInput editable  
                    totalWidth={200}
                    totalHeight={30}
                    style={style.inputname}
                    onChange={this.handleNumberofemployees}></NumericInput>
                </View> 
                <View style={{margin:10}}>
                <Text style={{marginBottom:5, alignSelf:'center'}}>Employees</Text>
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
                </ScrollView>
            </View>
        );
    }
}

export default AddnewCompany