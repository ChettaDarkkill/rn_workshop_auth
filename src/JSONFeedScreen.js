import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
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
    debugger;
    this.setState({ isFetching: true, youtubes: [] });

    let url = 'http://codemobiles.com/adhoc/youtubes/index_new.php';
    let regUsername = await AsyncStorage.getItem('username');
    let regPassword = await AsyncStorage.getItem('password');
    let data = `username=${regUsername}&password=${regPassword}&type=foods`;
    let response = await axios.post(url, data);

    this.setState({ youtubes: response.data.youtubes, isFetching: false });
  };

  renderRows = ({ item, index }) => {
    const { title, subtitle, avatar_image, youtube_image, id } = item;

    return (
      <View
        style={{
          ...styles.container,
          marginTop: 16,
          marginLeft: 16,
          marginRight: 16,
          backgroundColor: "white",
          borderRadius: 10,
          overflow: "hidden"
        }}>
        {/* Top section */}
        <View style={styles.listCardView}>
          {/* Avatar */}
          <Image
            style={styles.listAvatar}
            source={{ uri: avatar_image }}
            resizeMode="cover"
          />

          {/* Title and subtitle section */}
          <View style={styles.listTitleSubtitleContainer}>
            <Text style={styles.listTitle}>{title}</Text>
            <Text style={styles.listSubTitle}>{subtitle}</Text>
          </View>
        </View>

        {/* Youtube section */}
        <Image
          style={styles.listYoutbeImage}
          source={{ uri: youtube_image }}
          resizeMode="cover"
        />
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        resizeMode="cover"
        source={require('./assets/img/bg.png')}
        style={{ flex: 1, flexDirection: 'column' }}>
        <FlatList
          onRefresh={() => this.loadData()}
          refreshing={this.state.isFetching}
          style={{ flex: 1 }}
          data={this.state.youtubes}
          renderItem={this.renderRows}
          keyExtractor={item => item}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },
  list_header: {
    width: '100%',
    height: 100,
  },
  listCard: {
    overflow: 'hidden',
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 0,
  },
  listCardView: {
    flexDirection: 'row',
    marginBottom: 16,
    height: 45,
    alignItems: 'center',
  },
  listAvatar: {
    width: 45,
    height: '100%',
    marginRight: 16,
  },
  listTitleSubtitleContainer: {
    flexDirection: 'column',
    marginRight: 16,
    flex: 1,
  },
  listTitle: {
    fontWeight: '700',
  },
  listSubTitle: {
    fontWeight: '100',
  },
  listYoutbeImage: {
    width: '100%',
    height: 190,
  },
});
