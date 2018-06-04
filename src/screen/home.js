import React, { Component } from 'react';
import {  View, ScrollView, Text, StyleSheet} from 'react-native';
import {
    RkCard, RkButton, RkTheme, RkText
} from 'react-native-ui-kitten'

export default class componentName extends Component {
    renderBtn() {
        return (
            <RkCard rkType="panel">
                <View rkCardContent>
                    <RkButton
                        rkType="warning listBtn xlarge"
                        onPress={() => this.props.navigation.navigate('SelectStrategy')}>ADD NEW DEAL</RkButton>
                    <RkButton
                        rkType="warning listBtn xlarge">MY CALENDAR</RkButton>
                    <RkButton
                        rkType="warning listBtn xlarge">QUICK TOOLS</RkButton>
                </View>
            </RkCard>
        )
    }
  render() {
    return (
        <ScrollView>
            <RkCard rkType="panel">
                <View rkCardContent>
                    <RkText rkType="large" style={{fontWeight : 'bold'}}>My Deals</RkText>
                    <View style={styles.rkCardContentWarning}>
                        <Text style={{fontSize : 20, textAlign : 'center', color : '#FEFEFE', fontWeight : 'bold'}}>YOUR DEALS WILL BE HERE</Text>
                    </View>
                </View>
            </RkCard>

            {this.renderBtn()}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    rkCardContentWarning : {
        backgroundColor: '#F5AB35',
        padding : 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
})