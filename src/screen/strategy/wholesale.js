import React, { Component } from 'react';
import {  View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {
    RkCard, RkText, RkTextInput, RkButton
} from 'react-native-ui-kitten'
import { Ionicons } from '@expo/vector-icons';

const {width, height} = Dimensions.get('window')
let widthBtn = (width / 2) - 45

import Menu from './wholesale/menu'

export default class WholeSaleStep1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          address : ''
      };
    };

    onNext() {
        const {address} = this.state
        if (address) {
            this.props.navigation.navigate('WholeSale2', {address : address})
        } else {
            alert('Address Can\'t be empty')
        }
    }
    
  render() {
    return (
        <View style={{flex : 1 }}>
            <ScrollView style={styles.container}>
                <RkCard>
                    <View rkCardContent>
                        <RkText>Step 1 - Enter Address</RkText>
                        <RkTextInput
                            onChangeText={(address) => this.setState({address})}
                            value={this.state.address}
                            underlineColorAndroid="transparent"
                            style={styles.textInput}/>

                        <View style={{flexDirection : 'row'}}>
                            <RkButton
                                onPress={() => this.props.navigation.goBack()}
                                style={{width : widthBtn, marginRight: 10}}
                                rkType="outline">
                                <Ionicons name="ios-arrow-back" size={30} color="#089"/>
                                <RkText rkType="primary" style={{marginLeft: 10,}}>GO BACK</RkText>
                            </RkButton>
                            <RkButton
                                onPress={this.onNext.bind(this)}
                                style={{width : widthBtn, paddingLeft : 20, paddingRight: 20}}
                                rkType="outline">
                                <RkText
                                    rkType="primary"
                                    style={{marginRight: 10, fontSize: 12}}>CONTINUE TO STEP 2</RkText>
                                <Ionicons name="ios-arrow-forward" size={30} color="#089"/>
                            </RkButton>
                        </View>
                    </View>
                </RkCard>

                <Menu/>
            </ScrollView>
        </View>
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