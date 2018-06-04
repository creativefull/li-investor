import Home from "./screen/home";
import SelectStrategy from "./screen/selectStrategy";
import {
    WholeSale,
    WholeSale2,
    WholeSale3
} from './screen/strategy'

import {
    createStackNavigator
} from 'react-navigation';

export default createStackNavigator({
    Home : {
        screen : Home
    },
    SelectStrategy : {
        screen : SelectStrategy
    },
    WholeSale : {
        screen : WholeSale
    },
    WholeSale2 : {
        screen : WholeSale2
    },
    WholeSale3 : {
        screen : WholeSale3
    }
}, {
    headerMode : 'none',
    initialRouteName : 'Home'
})