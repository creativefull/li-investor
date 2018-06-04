import React, { Component } from 'react';
import { Dimensions, TextInput, View, Text, ScrollView} from 'react-native';
import {
    RkCard, RkText, RkTextInput, RkButton, RkTheme
} from 'react-native-ui-kitten'
const {width, height} = Dimensions.get('window')
import { Ionicons } from '@expo/vector-icons';

export default class WholeSaleStep4 extends Component {
  render() {
    return (
      <ScrollView style={{padding : 10}}>
        <RkCard>
            <View rkCardContent>
                <RkText rkType="heading" style={{textAlign : 'center', fontSize: 25, fontWeight: 'bold', marginBottom: 20}}>QUICK MAO</RkText>

                <RkText rkType="defaultText">ARV $75,000</RkText>
                <View style={{flexDirection : 'row'}}>
                    <RkText rkType="defaultText">X</RkText>
                    <TextInput style={{width : 100}}/><RkText rkType="defaultText">%</RkText>
                </View>
                <View style={{flexDirection : 'row'}}>
                    <RkText rkType="defaultText">-</RkText>
                    <TextInput style={{width : 100}}/><RkText rkType="defaultText">Rehab Cost</RkText>
                </View>
                <View style={{flexDirection : 'row', marginBottom : 20}}>
                    <RkText rkType="defaultText">-</RkText>
                    <TextInput style={{width : 100}}/><RkText rkType="defaultText">My Profit</RkText>
                </View>

                <RkText rkType="defaultText" style={{marginBottom : 20}}>MAO = $35,000</RkText>
                <RkText rkType="defaultText">We recomended you start at $30,765</RkText>
            </View>
        </RkCard>        

        <RkCard>
            <View rkCardContent style={{alignItems : 'center'}}>
                <RkButton rkType="full white">
                    <RkText style={{color : '#666', flex : 1, textAlign : 'center'}}>SCHEDULE APPOINTMENT</RkText>
                </RkButton>

                <RkButton rkType="full white">
                    <RkText style={{color : '#666', flex : 1, textAlign : 'center'}}>SCHEDULE FOLLOWUP</RkText>
                </RkButton>

                <RkButton
                    rkType="outline">
                    <Ionicons name="ios-arrow-back" size={30} color="#089"/>
                    <RkText rkType="primary" style={{marginLeft: 10,}}>GO BACK</RkText>
                </RkButton>
            </View>
        </RkCard>
      </ScrollView>
    );
  }
}

RkTheme.setType('RkText', 'defaultText', {
    fontWeight : 'bold',
    fontSize : 20
})

RkTheme.setType('RkButton', 'full', {
    width : width - 50,
    borderWidth: 1,
    borderColor: '#666',
    backgroundColor: '#FFF',
    marginBottom : 10
})