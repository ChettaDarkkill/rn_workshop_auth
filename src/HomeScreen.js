import React, { Component } from 'react';
import { Text, View, ImageBackground, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends Component {
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
                        <View style={{
                            height: 40,
                            width: 40,
                            backgroundColor: 'red',
                            borderRadius: 20,
                            marginRight: 8
                        }} />
                        <TextInput style={{
                            flex: 1,
                            height: 40,
                            borderRadius: 3,
                            borderWidth: 1,
                            borderColor: "#0003",
                            paddingLeft: 8
                        }}
                            placeholder="Username" />
                    </View>

                    {/* Password section */}
                    <View style={{ marginTop: 8, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{
                            height: 40,
                            width: 40,
                            backgroundColor: 'yellow',
                            borderRadius: 20,
                            marginRight: 8
                        }} />
                        <TextInput
                            secureTextEntry={true}
                            style={{
                                flex: 1,
                                height: 40,
                                borderRadius: 3,
                                borderWidth: 1,
                                borderColor: "#0003",
                                paddingLeft: 8
                            }}
                            placeholder="Password" />
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Button title="Login" />
                    </View>
                    <TouchableOpacity
                        onPress={ () => {this.props.navigation.navigate('register')}}
                        style={{ marginTop: 8, marginBottom: 16, backgroundColor: "#fff4", height: 40, borderTopEndRadius: 5, justifyContent: "center" }}>
                        <Text style={{ textAlign: 'center', color: "#0009" }}>Register</Text>
                    </TouchableOpacity>
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