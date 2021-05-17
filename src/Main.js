import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { Button, StyleSheet, Text, View } from 'react-native';

var studentslength=0;
var newstudentadded=0;
var newcompanyadded=0;

var CompaniesList = [['Field Genie', 'info@fieldgenie.com', 'Houston, USA', 'https://fieldgenie.com/',
  1, ["Amit Kumar"]],
  ['Oracle', 'copyright_us@oracle.com', 'Redwood Shores, CA 94065', 'https://www.oracle.com/in/index.html',
  2,['Amit Meena, Amit Sootwal']]];

  var StudentsList = [
    ['Amit Kumar', 'amit.kumar.ece17@itbhu.ac.in', 'Jalalsar, Rajasthan' ,'Field Genie'],
    ['Amit Meena', 'amit.meena.eee17@itbhu.ac.in', 'Nawalgarh, Rajasthan', 'Oracle']
  ];

  var Companiesnamelist = [];
  for(var i=0;i<CompaniesList.length;i++){
      Companiesnamelist.push(CompaniesList[i][0]);
  }

  
  
    if(newstudentadded===1){
    studentslength = StudentsList.length;
      for(var i=0;i<CompaniesList.length;i++){
          if(CompaniesList[i][0]===StudentsList[studentslength-1][3]){
              CompaniesList[i][4]=CompaniesList[i][4]+1;
              CompaniesList[i][5]=CompaniesList[i][5]+', '+StudentsList[studentslength-1][0];
          }
      } newstudentadded=0;
    }

 class Main extends Component{

    

    render(){
        StudentsList.push(this.props.navigation.getParam('newlist'));
        if(this.props.navigation.getParam('newlist')!=null){
            alert('New Student Added !');
            newstudentadded++;
        }

        CompaniesList.push(this.props.navigation.getParam('newList'));
        if(this.props.navigation.getParam('newList')!=null){
            Companiesnamelist.push(this.props.navigation.getParam('newList')[0]);
            alert("New Company Added !");
        }

        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{marginVertical:10}}>Choose one option :</Text>
                <View style={{marginVertical:10}}> 
                    <Button title="Add New Student" 
                    onPress={()=>this.props.navigation.navigate('AddnewStudent', {list:Companiesnamelist})}></Button>
                </View>
                <View style={{marginVertical:10}}>
                    <Button title="Add New Company" 
                    onPress={()=>this.props.navigation.navigate('AddnewCompany')}></Button>
                </View>
                <View style={{marginVertical:10}}>
                    <Button title="List of Students" 
                    onPress={()=>this.props.navigation.navigate('ListofStudents', {list:StudentsList})}></Button>
                </View>
                <View style={{marginVertical:10}}>
                    <Button title="List of Companies" 
                    onPress={()=>this.props.navigation.navigate('ListofCompanies', {list:CompaniesList} )}></Button>
                </View>
            </View>
        );
    }
}

export default Main