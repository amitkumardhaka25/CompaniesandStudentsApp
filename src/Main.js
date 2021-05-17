import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import email from 'react-native-email'


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

  
function updateCompanyStudent(){
    if(newstudentadded===1){    
    studentslength = StudentsList.length;
      for(var i=0;i<CompaniesList.length;i++){
          if(CompaniesList[i][0].localeCompare(StudentsList[studentslength-1][3])===0){
              CompaniesList[i][4]=CompaniesList[i][4]+1;
              CompaniesList[i][5]=CompaniesList[i][5]+', '+StudentsList[studentslength-1][0];
              
              const to = CompaniesList[i][1] // string or array of email addresses
                email(to, {
                // Optional additional arguments
                //cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
               // bcc: 'mee@mee.com', // string or array of email addresses
                subject: StudentsList[studentslength-1][0]+' is added to your company',
                body: 'New Student Added...'
                }).catch(console.error)
          }
      } newstudentadded=0;
    }
}

 class Main extends Component{

   

    render(){
        
        if(this.props.navigation.getParam('newStudent')!=null  ){
            StudentsList.push(this.props.navigation.getParam('newStudent'));
            newstudentadded = 1;
            // alert(this.props.navigation.getParam('newStudent')[0] + ' is added to the students list !');
            updateCompanyStudent();
            this.props.navigation.setParams({
                'newStudent' : null})
            }

        
        
        
        if(this.props.navigation.getParam('newCompany')!=null){
            CompaniesList.push(this.props.navigation.getParam('newCompany'));
            Companiesnamelist.push(this.props.navigation.getParam('newCompany')[0]);
            newcompanyadded=1;
            alert(this.props.navigation.getParam('newCompany')[0] + ' is added to the companies list !');
            newstudentadded=0;
            this.props.navigation.setParams({'newCompany':null});
        }

        return(
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{marginVertical:10, fontSize:20, color:'red'}}>Choose one option :</Text>
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