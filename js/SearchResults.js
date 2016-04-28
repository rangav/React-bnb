/* @flow */

import React, {
  Animated,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { fetch } from 'fetch';
import ListingCell from './ListingCell';

import type { Listing } from './data';

class SearchResults extends Component {
  state: {
    listings: Array<Listing>;
    likedIDs: Array<number>;
    anim: Animated.Value;
  };

  constructor() {
    super();
    this.state = {
      listings: [],
      likedIDs: [],
      anim: new Animated.Value(0),
    };
  }

  render() {
    const ui = this.state.listings.map(
      (listing) =>
        <ListingCell
          key={listing.id}
          listing={listing}
          isLiked={this.state.likedIDs.indexOf(listing.id) !== -1}
          onLike={() => this.toggleLike(listing.id)}
        />
    );
    const opacity = this.state.anim.interpolate({
      inputRange: [100, 200],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          translucent={true}
        />
        <View style={styles.toolbar}>
          <Text>Santa Cruz</Text>
          <Text style={styles.results}>
            {this.state.listings.length} homes
          </Text>
        </View>
        <ScrollView
          style={styles.container}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          onScroll={(e) => this.state.anim.setValue(e.nativeEvent.contentOffset.y)}>
          {ui}
        </ScrollView>
        <Animated.View style={[styles.filter, {opacity}]}>
          <Text style={styles.filterTitle}>
            Show Filters {'\u25BC'}
          </Text>
        </Animated.View>
      </View>
    );
  }

  componentDidMount() {
    fetch('https://goo.gl/r3r3FN')
      .then(response => response.json())
      .then((data) => {
        console.log('Response from API:', data);
        this.setState({listings: data});
      });
  }

  toggleLike(id: number) {
    const {likedIDs} = this.state;
    const isLiked = likedIDs.indexOf(id) !== -1;
    if (isLiked) {
      this.setState({likedIDs: likedIDs.filter(i => i !== id)});
    } else {
      this.setState({likedIDs: [...likedIDs, id]});
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    paddingTop: 20,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  results: {
    color: '#999',
  },
  filter: {
    position: 'absolute',
    top: 64,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterTitle: {
    color: '#FF5A5F',
  },
});

export default SearchResults;
