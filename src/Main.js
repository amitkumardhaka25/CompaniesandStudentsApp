import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


var studentslength=0;
var newstudentadded=0;
var newcompanyadded=0;


//Defining the arrays into the most outer file will be better, because you are navigating every where from that
//file.
//So you can send data from this file to any other file easily, and it will be easy to update data.
//Here I am not using key and value in these arrays, like we were doing in React Web App, Because I need to send 
//this data into React-Table and table only accepts arrays with data only.
var CompaniesList = [['Field Genie', 'info@fieldgenie.com', 'Houston, USA', 'https://fieldgenie.com/',
  1, ["Amit Kumar"]],
  ['Oracle', 'copyright_us@oracle.com', 'Redwood Shores, CA 94065', 'https://www.oracle.com/in/index.html',
  2,['Amit Meena, Amit Sootwal']]];

  var StudentsList = [
    ['Amit Kumar', 'amit.kumar.ece17@itbhu.ac.in', 'Jalalsar, Rajasthan' ,'Field Genie'],
    ['Amit Meena', 'amit.meena.eee17@itbhu.ac.in', 'Nawalgarh, Rajasthan', 'Oracle']
  ];

  //We will use this variable array into Student Input File, to select company.
  //So instead to sending full CompaniesList to StudentInput file, I am just sending this array
  //which contains only names of companies.
  var Companiesnamelist = [];
  for(var i=0;i<CompaniesList.length;i++){
      Companiesnamelist.push(CompaniesList[i][0]);
  }

//Whenever we add new student into list, we also need to update our CompaniesList accordingly
//So I am checking here that new student belongs to which company.
function updateCompanyStudent(){
    if(newstudentadded===1){    
    studentslength = StudentsList.length;
      for(var i=0;i<CompaniesList.length;i++){
          if(CompaniesList[i][0].localeCompare(StudentsList[studentslength-1][3])===0){
              CompaniesList[i][4]=CompaniesList[i][4]+1;
              CompaniesList[i][5]=CompaniesList[i][5]+', '+StudentsList[studentslength-1][0];
              
        //       const to = CompaniesList[i][1] // string or array of email addresses
        //         email(to, {
        //         // Optional additional arguments
        //         //cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
        //        // bcc: 'mee@mee.com', // string or array of email addresses
        //         subject: StudentsList[studentslength-1][0]+' is added to your company',
        //         body: 'New Student Added...'
        //         }).catch(console.error)
           }
      } newstudentadded=0;
    }
}

 class Main extends Component{

   

    render(){
        
        //This if statement is very important.
        //for example: If we added a new student and then we add new company, so accoding to us app should only
        //add new company to companyist, but before going to addnewcompany file we didn't set this newStudent
        //data to null, so it will also add student into studentlist, so to avoid unnecessary addition of data
        //we are using if statement and when our work is done we are setting this data to null so that it won't 
        //go into this if statement again.
        if(this.props.navigation.getParam('newStudent')!=null  ){
            //pushes new data into StudentsList.
            StudentsList.push(this.props.navigation.getParam('newStudent'));
            newstudentadded = 1;
            alert( this.props.navigation.getParam('newStudent')[0] + ' is added to the students list !');
            //calling this function to update companiesList.
            updateCompanyStudent();

            this.props.navigation.setParams({
                'newStudent' : null, 'studentimage':null})
                //this part is must to avoid unnecessary addition of data. 
            }

        
        
        //Same as above.....LOL.....
        if(this.props.navigation.getParam('newCompany')!=null){
            CompaniesList.push(this.props.navigation.getParam('newCompany'));

            //Here we are adding newcompany's name into CompaniesNameList also.
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