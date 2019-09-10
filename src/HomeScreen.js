import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';


export default class HomeScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        };
    };

    async componentDidMount() {
        let isAuthened = await AsyncStorage.getItem("isAuthened")
        if (isAuthened && isAuthened == "yes") {
            let username = await AsyncStorage.getItem("username")
            let password = await AsyncStorage.getItem("password")
            this.setState({ username, password })
        }
    }

    onClickLogin = async () => {
        let regUsername = await AsyncStorage.getItem("username")
        let regPassword = await AsyncStorage.getItem("password")

        // Destructuring
        const { username, password } = this.state
        if (regUsername == username && regPassword == password) {
            await AsyncStorage.setItem("isAuthened", "yes")
            this.props.navigation.navigate("AppScene")
        } else {
            alert("Login Failed")
        }
    }


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
                    {/* Username section */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View
                            style={{
                                height: 40,
                                width: 40,
                                backgroundColor: 'red',
                                borderRadius: 20,
                                marginRight: 8,
                            }}
                        />
                        <TextInput
                            keyboardType="email-address"
                            value={this.state.username}
                            onChangeText={text => this.setState({ username: text })}
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                borderRadius: 3,
                                borderColor: '#0003',
                                height: 40,
                                paddingLeft: 8,
                            }}
                            placeholder="Username"
                        />
                    </View>

                    {/* Password section */}
                    <View
                        style={{ marginTop: 8, flexDirection: 'row', alignItems: 'center' }}>
                        <View
                            style={{
                                height: 40,
                                width: 40,
                                backgroundColor: 'yellow',
                                borderRadius: 20,
                                marginRight: 8,
                            }}
                        />
                        <TextInput
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={text => this.setState({ password: text })}
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                borderRadius: 3,
                                borderColor: '#0003',
                                height: 40,
                                paddingLeft: 8,
                            }}
                            placeholder="Password"
                        />
                    </View>

                    {/* Login Button */}
                    <View style={{ marginTop: 16 }}>
                        <Button title="Login" onPress={this.onClickLogin} />
                    </View>

                    {/* Register Button */}
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.navigate("register") }}
                        style={{
                            marginTop: 8,
                            marginBottom: 16,
                            backgroundColor: '#fff4',
                            height: 35,
                            borderRadius: 5,
                            justifyContent: 'center',
                        }}>
                        <Text style={{ textAlign: 'center', color: '#0009' }}>Register</Text>
                    </TouchableOpacity>
                </View>

                {/* Banner */}
                <Image
                    resizeMode="contain"
                    style={{ height: 100, width: '100%' }}
                    source={require('./assets/img/header_react_native.png')} />
            </ImageBackground>
        );
    }
}




HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        title: "Home",
        headerStyle: {
            backgroundColor: '#119CED'
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { color: "#fff" },
        headerBackTitle: " ",
        headerRight: (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => alert("www.codemobiles.com")}
                style={{ padding: 10 }}>
                <Icon
                    name="address-card"
                    size={20}
                    color="#fff"
                    style={{
                        height: 24,
                        width: 24
                    }}
                />
            </TouchableOpacity>
        )
    };
};