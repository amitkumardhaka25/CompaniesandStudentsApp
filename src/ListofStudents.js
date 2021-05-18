import React, { Component, useState } from 'react';
import { Button,ScrollView ,StyleSheet, Text, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import email from 'react-native-email'

   
  const styles = StyleSheet.create({
    title: { flex: 2, backgroundColor: '#f6f8fa', width:200 },
    text: { textAlign: 'center', width:300 },

  });

  var StudentsList = [];

 

  function setStudentList(){
    for(var i=0;i<StudentsList.length;i++){
      var StudentColumn = StudentsList[i];
      const to = StudentColumn[1];
      StudentsList[i][1]=[<Text style={{color:'red'}} onPress={()=>email(to, {
        subject: 'Enter Subject Here...', body: 'Enter Body Here...'}).catch(console.error)}>{StudentColumn[1]}</Text> ];
      }  
}


class ListofStudents extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name', 'Email', 'Address', 'Company'],
      tableData: []
    }
  }


    

       

render(){

  const state = this.state;


  StudentsList = this.props.navigation.getParam('list');
  if(this.props.navigation.getParam('list')!=null){
    setStudentList();
  }


        return (
            <View  style={{flex:1, alignItems:'center', justifyContent:'center'}}>
             <Table style={{flexDirection: 'row'}}>
                    {/* Left Wrapper */}
                    <TableWrapper style={{width: 70, flexDirection:'row', marginLeft:10}}>
                    <Col data ={state.tableHead} style={styles.title} heightArr={[50, 50, 50, 50]}/>
                    </TableWrapper>

                    {/* Right Wrapper */}
                    <ScrollView horizontal={true}>
                    <TableWrapper style={{flex:1, borderWidth:1}}>
                    <Cols data={StudentsList} heightArr={[50, 50, 50, 50]} textStyle={styles.text}/>
                    </TableWrapper>
                    </ScrollView>
                    </Table>
            </View>
        );
    }
  }
  export default ListofStudents;