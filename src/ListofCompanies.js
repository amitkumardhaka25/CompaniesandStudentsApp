import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const styles = StyleSheet.create({
        title: { flex: 2, backgroundColor: '#f6f8fa', width:200 },
        text: { textAlign: 'center', width:300 },
      });

class ListofCompanies extends Component {

    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Name', 'Email', 'Address', 'Website', 'Number of Employees', 'Employees'],
        }
      }




    render(){
        const state = this.state;
        var CompaniesList = this.props.navigation.getParam('list');

        return (
            <View  style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                 <Table style={{flexDirection: 'row'}}>
                    {/* Left Wrapper */}
                    <TableWrapper style={{width: 150, flexDirection:'row', marginLeft:10}}>
                    <Col data ={state.tableHead} style={styles.title} heightArr={[30, 30, 30, 30, 30, 30]}/>
                    </TableWrapper>

                    {/* Right Wrapper */}
                    <ScrollView horizontal={true}>
                    <TableWrapper style={{flex:1, borderWidth:1}}>
                    <Cols data={CompaniesList} heightArr={[30, 30, 30, 30, 30, 30]} textStyle={styles.text}/>
                    </TableWrapper>
                    </ScrollView>
                </Table>
            </View>
        );
    }
}

export default ListofCompanies