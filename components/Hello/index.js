import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Hello extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name
        }
    }
    render(){ 
        return(
            <View>
            <Text>{this.state.name}</Text>
            </View>
        )
    }
}

export default Hello