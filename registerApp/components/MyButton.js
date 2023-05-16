import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

class MyButton extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Pressable onPress={this.props.onPress} style={{
                backgroundColor: this.props.bgColor,
                padding: 10, 
                borderRadius: 15,
                backgroundColor: this.props.bgColor,
                margin: 10}}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: "white",
                        fontSize: 16,
                    }}>{this.props.text}</Text>
            </Pressable>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        
    },
    text: {
        
    }
});

export default MyButton;