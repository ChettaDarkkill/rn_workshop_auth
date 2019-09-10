import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class JSONFeedScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      youtubes: [],
      isFetching: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }
  loadData = async () => {
    this.setState({ isFetching: true, youtubes: [] });

    let url = 'http://codemobiles.com/adhoc/youtubes/index_new.php';
    let regUsername = await AsyncStorage.getItem('username');
    let regPassword = await AsyncStorage.getItem('password');
    let data = `username=${regUsername}&password=${regPassword}&type=foods`;

    let response = await axios.post(url, data);
    alert(JSON.stringify(response.data));
    this.setState({ youtubes: response.data.youtubes });
  };

  renderRows = ({ item, index }) => {
    const { title, subtitle, avatar_image, youtube_image, id } = item;
    return <View style={styles.container}>
      <Text>{title}</Text>
    </View>;
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.youtubes}
          renderItem={this.renderRows}
          keyExtractor={item => item}></FlatList>
      </View>
    );
  }
}


const styles = {
  container: { flex: 1, flexDirection: 'column' }
}