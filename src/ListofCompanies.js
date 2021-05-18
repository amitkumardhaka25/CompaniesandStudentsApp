import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Hyperlink from 'react-native-hyperlink'
import email from 'react-native-email';


const styles = StyleSheet.create({
        title: { flex: 2, backgroundColor: '#f6f8fa', width:200 },
        text: { textAlign: 'center', width:300 },
      });


var CompaniesList = [];

function setCompaniesList(){
  for(var i=0;i<CompaniesList.length;i++){
    var CompanyColumn = CompaniesList[i];
    const to = CompanyColumn[1];
    CompaniesList[i][1] = [<Text style={{color:'red'}} onPress={()=>{email(to,{
                            subject:'Enter Subject Here...', body:'Enter Body Here...'}).catch(console.error)}}>
                            {CompanyColumn[1]}</Text>]
    CompaniesList[i][3]=[<Hyperlink linkDefault={true}>
                            <Text style={{color:'red', borderBottomColor:'red'}}
                            >{CompanyColumn[3]}</Text>
                        </Hyperlink>]
  }
}

class ListofCompanies extends Component {

    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Name', 'Email', 'Address', 'Website', 'Number of Employees', 'Employees'],
        }
      }




    render(){
        const state = this.state;
        if( this.props.navigation.getParam('list')!=null ){
          CompaniesList = this.props.navigation.getParam('list');
          setCompaniesList();
        }

        return (
            <View  style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                 <Table style={{flexDirection: 'row'}}>
                    {/* Left Wrapper */}
                    <TableWrapper style={{width: 80, flexDirection:'row', marginLeft:10, alignItems:'stretch'}}>
                    <Col data ={state.tableHead} style={styles.title} heightArr={[50, 50, 50, 50, 50, 50]}/>
                    </TableWrapper>

                    {/* Right Wrapper */}
                    <ScrollView horizontal={true}>
                    <TableWrapper style={{flex:1, borderWidth:1}}>
                    <Cols data={CompaniesList} heightArr={[50, 50, 50, 50, 50, 50]} textStyle={styles.text}/>
                    </TableWrapper>
                    </ScrollView>
                </Table>
            </View>
        );
    }
}

export default ListofCompanies