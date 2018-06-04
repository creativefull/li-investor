import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import { RkButton, RkText } from "react-native-ui-kitten";
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default class SelectStrategy extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       buttonMenu : [{
          label : "Wholesale",
          route : "WholeSale"
        },{
          label : "Flip/Rehab",
          route : "/"
        },{
          label : "Rental",
          route : "/"
        },{
          label : "Lease Option (Coming Soon)",
          route : "/"
        },{
          label : "Commercial (Coming Soon)",
          route : "/"
        }]
    };

    this.renderButton = this.renderButton.bind(this)
  };
  
  menuOnPress(link) {
    this.props.navigation.navigate(link)
  }

  renderButton() {
    return (
      <View>
        {this.state.buttonMenu.map((menu, key) => {
          return (
            <RkButton
              rkType="clear bordered listBtn defaultBtn"
              onPress={() => this.menuOnPress(menu.route)}
              key={key}>
              <RkText
                style={{padding : 10}}
                rkType="textBtn primary">{menu.label}</RkText>
            </RkButton>
          )
        })}
      </View>
    )
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View
          style={{alignItems : 'center'}}>
          <RkText style={styles.heading}>
            What is Your Strategy ?
          </RkText>
        </View>
        {this.renderButton()}
        <RkButton
          rkType="clear transparent">
          <Ionicons name="ios-arrow-back" size={30} color="#089"/>
          <RkText
            style={{padding : 10, fontWeight: 'bold'}}
            rkType="primary"
            onPress={() => this.props.navigation.goBack()}>
            GO BACK TO HOME SCREEN
          </RkText>
        </RkButton>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    padding: 10,
    paddingTop: 30,
    alignContent: 'center'
  },
  heading : {
    fontSize: 25,
    marginBottom: 40,
    alignItems: 'center',
    alignContent: 'center',
  }
})