import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import settings from "../settings.json"

import MyButton from "./MyButton"

class AddUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: ""
        };
        console.log("Main")
    }
    
    setLoginValue(v){
        let temp = this.state.password
        this.setState({
            login: v,
            password: temp
        })
    }

    setPassValue(v){
        let temp = this.state.login
        this.setState({
            login: temp,
            password: v
        })
    }

    sendUser = () => {
        fetch(`http://${settings.address}:${settings.port}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: this.state.login,
                password: this.state.password,
            }),
        });
    }

    regButton = () => {
        if(this.state.login == "" || this.state.password == ""){
            alert("login and password cannot be empty!")
        }
        else{    
            
            fetch(`http://${settings.address}:${settings.port}`)
            .then((res)=>res.json())
            .then((json)=>{
                data = JSON.stringify(json)
                newUser = this.state.login
                if(json.includes(newUser)){
                    alert("this user already exist!")
                }
                else{
                    this.sendUser()
                    json.push(this.state.login)
                    this.props.navigation.navigate("s2", {users: json})
                }
            })
        }
    }

    render() {
        return (
          <View style={{flex:1}}>
            <View style={styles.header}>
                <Text style={styles.text_header}> Register App </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.text_content}> Welcome in app! </Text>
                <TextInput placeholder="login" style={styles.inputText} name="login" onChangeText={(value) => this.setLoginValue(value)}/>
                <TextInput placeholder="password" style={styles.inputText} name="password" onChangeText={(value) => this.setPassValue(value)} secureTextEntry={true}/>
                <MyButton bgColor="green" text="REGISTER" onPress={this.regButton}></MyButton>
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    header: { 
        flex: 0.5,
        backgroundColor: "green",
        justifyContent: 'center'
    },
    content: {
        flex: 0.5,
        backgroundColor: "gray",
        padding: 30,
        alignItems: 'center'
    },
    text_header: {
        fontSize: 48, 
        color: "white",
        textAlign: 'center',
    },
    text_content: {
        color: "lightgray",
        textAlign: "center"
    },
    inputText: {
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'green',
        fontSize: 20,
        width: 200
    },
});

export default AddUser;