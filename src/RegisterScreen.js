import React, { Component } from 'react'
import { Text, View, ImageBackground, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

class TV3Entry extends Component {
    render() {
        const { hint, icon } = this.props
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon
                    name={icon}
                    size={30}
                    style={{

                    }}
                />
                <TextInput
                    onChangeText={this.props.onChange}
                    style={{
                        flex: 1,
                        height: 40,
                        borderRadius: 3,
                        borderWidth: 1,
                        borderColor: "#0003",
                        paddingLeft: 8
                    }}
                    placeholder={hint} />
            </View>
        )
    }
}

export default class RegisterScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        };
    };


    render() {
        return (
            <ImageBackground
                source={require('./assets/img/bg.png')}
                style={{ flex: 1, flexDirection: 'column' }}>
                {/* Login section */}
                <View
                    style={{
                        backgroundColor: '#FFF3',
                        marginTop: 16,
                        marginLeft: 16,
                        marginRight: 16,
                        paddingTop: 16,
                        paddingLeft: 16,
                        paddingRight: 16,
                        borderRadius: 5,
                    }}>

                    <TV3Entry
                        icon="user"
                        hint="Username"
                        onChange={text => { this.setState({ username: text }) }}
                    />
                    <View style={{ height: 16 }} />
                    <TV3Entry
                        onChange={text => { this.setState({ password: text }) }}
                        icon="lock"
                        hint="Password" />

                    {/* Register */}
                    <View style={{ marginTop: 16 }}>
                        <Button title="Register" />
                    </View>
                    {/* Cancel */}
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.goBack() }}
                        style={{ marginTop: 8, marginBottom: 16, backgroundColor: "#fff4", height: 40, borderTopEndRadius: 5, justifyContent: "center" }}>
                        <Text style={{ textAlign: 'center', color: "#0009" }}>Cancel</Text>
                    </TouchableOpacity>
                    <Text>{JSON.stringify(this.state)}</Text>
                </View>
                <Image
                    resizeMode="contain"
                    source={require("./assets/img/header_react_native.png")} style={{
                        height: 100,
                        width: '100%',
                    }} />
            </ImageBackground>
        );
    }
}


RegisterScreen.navigationOptions = ({ navigation }) => {
    return {
        title: "Register",
        headerStyle: {
            backgroundColor: '#119CED'
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { color: "#fff" },
        headerBackTitle: " ",

    };
};