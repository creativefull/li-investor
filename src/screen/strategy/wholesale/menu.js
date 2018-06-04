import React, { Component } from 'react';
import {  View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {
    RkCard, RkText, RkTextInput, RkButton
} from 'react-native-ui-kitten'
import { Ionicons } from '@expo/vector-icons';

const {width, height} = Dimensions.get('window')
let widthBtn = (width / 2) - 45

export default class WholeSaleStep1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        buttonMenu : [{
            label : "PREQUALIFY",
            route : "WholeSale"
          },{
            label : "SCHEDULE THE APPOINTMENT",
            route : "/"
          },{
            label : "ANALYZE THE DEAL",
            route : "/"
          },{
            label : "SECURE THE DEAL",
            route : "/"
          },{
            label : "TAKE PHOTOS",
            route : "/"
          },{
            label : "MARKET THE DEAL",
            route : "/"
          }]
      };
    };
    
    renderMenu() {
        return (
            <View style={{flexDirection : 'row', justifyContent : 'center', alignItems : 'center', flexWrap : 'wrap'}}>
                { this.state.buttonMenu.map((menu, key) => {
                        return (
                            <RkButton rkType="primary outline" style={styles.buttonMenu} key={key}>
                                <RkText rkType="small">{menu.label}</RkText>
                            </RkButton>
                        )
                    }) }
            </View>
        )
    }
  render() {
    return (
        <RkCard style={{marginTop : 40}}>
            <View rkCardContent style={{marginBottom : 40}}>
                {this.renderMenu()}
            </View>
        </RkCard>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        padding: 20,
        flex : 1
    },
    textInput : {
        paddingTop : 20,
        paddingBottom : 20,
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
    },
    buttonMenu : {
        margin : 5,
        width : (width / 2) - 50,
        height : height / 4
    }
})