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
    constructor (props){
        super(props);

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
    
    Addnewstudentinthelist=(name, email, address, company)=>{
        
    }

    const list = this.props.navigation.getParam('list');
    
}



    render(){      
        const state = this.state;  
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
                    <Picker style={{ height: 50, width: 200, borderWidth:1 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({company:itemValue})}>
                        <Picker.Item label="Select One" value="" />
                        <Picker.Item label="Field Genie" value="Field Genie" />
                        <Picker.Item label="Oracle" value="Oracle" />
                    </Picker>
                </View>
                <View>
                    <Button style={style.submit} 
                        title="Submit" 
                        onPress={()=>this.Addnewstudentinthelist(
                        this.state.name, this.state.email,
                        this.state.address, this.state.company
                    )}></Button>
                </View>
            </View>
        );
    }
}

export default AddnewStudent