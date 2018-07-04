import React, { Component } from 'react';
import {  View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {
    RkCard, RkText, RkTextInput, RkButton
} from 'react-native-ui-kitten'
import { Ionicons } from '@expo/vector-icons';

const {width, height} = Dimensions.get('window')
let widthBtn = (width / 2) - 45

import Menu from './menu'

export default class WholeSaleStep1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          sellerName : ''
      };
    };

    onNext() {
        const {sellerName} = this.state
        const {params} = this.props.navigation.state
        if (sellerName) {
            this.props.navigation.navigate('WholeSale3', {
                address : params.address,
                sellerName : sellerName
            })
        } else {
            alert('Seller Name Can\'t be empty')
        }
    }

  render() {
    return (
        <View style={{flex : 1 }}>
            <ScrollView style={styles.container}>
                <RkCard>
                    <View rkCardContent>
                        <RkText style={{fontSize : 20, alignItems: 'center'}}>Seller Name</RkText>
                        <RkTextInput
                            onChangeText={(sellerName) => this.setState({sellerName})}
                            value={this.state.sellerName}
                            underlineColorAndroid="transparent"
                            style={styles.textInput}/>

                        <View style={{flexDirection : 'row'}}>
                            <RkButton
                                onPress={() => this.props.navigation.goBack()}
                                style={{width : widthBtn, marginRight: 10}}
                                rkType="outline">
                                <Ionicons name="ios-arrow-back" size={30} color="#089"/>
                                <RkText rkType="primary" style={{marginLeft: 10,}}>LAST</RkText>
                            </RkButton>
                            <RkButton
                                onPress={this.onNext.bind(this)}
                                style={{width : widthBtn, paddingLeft : 20, paddingRight: 20}}
                                rkType="outline">
                                <RkText rkType="primary" style={{marginRight: 10, fontSize: 12}}>NEXT</RkText>
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