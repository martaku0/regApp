
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image } from 'react-native';
import MyButton from './MyButton';
import settings from "../settings.json"

class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
        console.log("User")
    }

    render() {
        return (
          <View style={{flex:1,backgroundColor:"gray", padding: 20, justifyContent: "center", alignItems: "center"}}>    
            <Image style={styles.img} source={require("../assets/user.png")}/>               
            <Text>login:</Text>
            <Text style={styles.txtImpornant}>{this.props.route.params.login}</Text>
            <Text>password:</Text>
            <Text style={styles.txtImpornant}>{this.props.route.params.password}</Text>
            <Text>registered:</Text>
            <Text style={styles.txtImpornant}>{this.props.route.params.registered}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 200,
        marginBottom: 50
    },
    txtImpornant: {
        fontWeight: "bold",
        fontSize: 24,
        color: "green"
    }
});

export default User;