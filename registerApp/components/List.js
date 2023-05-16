
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image } from 'react-native';
import MyButton from './MyButton';
import User from './User'
import settings from "../settings.json"

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        console.log("List")
        console.log(this.state.users)      
    }

    load(){
        console.log("aaa")
        fetch(`http://${settings.address}:${settings.port}/indexes`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            }),
        })
        .then((res)=>res.json())
        .then((json)=>{
            console.log(json)
            data = JSON.stringify(json)
            temp = this.props.route.params.users
            const tab = []
            for(let i = 0; i<json.length; i++){
                tab.push({nickname: temp[i], index: json[i]})
            }
            this.setState({
                users: tab
            })
        })
    }

    componentDidMount(){
        this.load()
    }

    async deleteUser(inx){
        await fetch(`http://${settings.address}:${settings.port}/del`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                index: inx.index
            }),
        })
        .then((res)=>res.json())
        .then((json)=>{
            console.log(json)
            data = JSON.stringify(json)
            this.setState({
                users: json
            })
        })

        this.load()
    }

    detailsUser(inx){
        fetch(`http://${settings.address}:${settings.port}/details`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                
            }),
        })
        .then((res)=>res.json())
        .then((json)=>{
            i = inx.index
            data = JSON.stringify(json)
            this.props.navigation.navigate("s3", {login: json[i].login, password: json[i].password, registered: json[i].registered})
        })

    }

    render() {
        console.log(this.state)
        return (
          <View style={{flex:1,backgroundColor:"gray"}}>            
            <MyButton
                bgColor="green" text="BACK TO LOGIN PAGE" 
                onPress={() => this.props.navigation.navigate("s1")}
            />
            <FlatList
                data={
                    this.state.users
                }
                renderItem={({ item, index }) => 
                    <View style={styles.user}>
                        <View style={{flex:1, flexDirection: "row", alignItems: "center"}}><Image style={styles.img} source={require("../assets/user.png")}/>
                        <Text style={styles.nick}>{item.index}: {item.nickname}</Text></View>
                        <MyButton bgColor="green" text="DETAILS" onPress={() => this.detailsUser({index})}/>
                        <MyButton bgColor="green" text="DELETE" onPress={() => this.deleteUser({index})}/>
                    </View>}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    text: { fontSize: 48, },
    user: {
        margin: 20,
        borderColor: "black",
        borderWidth: 5,
        padding: 10,
        borderRadius: 20
    },
    img: {
        width: 100,
        height: 100
    },
    nick:{
        flex: 0.8,
        fontSize: 24,
        fontWeight: "bold"
    },
    img: {
        flex: 0.2,
        width: 50,
        height: 70
    }
});

export default List;