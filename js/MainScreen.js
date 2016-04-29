/* @flow */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { fetch } from 'fetch';

import type { Listing } from './data';

// #1. Explore and have fun!
// #2. Change text color and make it bigger. Add some margin between text and image.
//     Make the content centered
// #3. Make image tappable (see TouchableOpacity or TouchableHighlight)
// #4. Uncomment the query in `componentDidMount`
// #5. Show number of listings instead of "Hello, fox!"
// #6. Render listing titles. For every record you want to render its own <Text />
// #7. Extract secret view into its own component. Add more info. Make the list scrollable
// #8. Add ability to like listings

class ReactBnb extends Component {
  constructor() {
    super();
    this.state = { listings: [] };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.foxImage}
          source={require('./img/fox.png')}
        />
        <View style={{marginTop: 20}}>
          <Text style={styles.helloText}>Hello, fox!</Text>
        </View>
      </View>
    );
  }

  componentDidMount() {
    // fetch('https://goo.gl/r3r3FN')
    //   .then(response => response.json())
    //   .then((data) => {
    //     console.log('Response from API:', data);
    //   });
  }
}

var IMAGE_SIZE = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  foxImage: {
    borderRadius: IMAGE_SIZE / 2,
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  helloText: {
    fontSize: 14,
  },
});

export default ReactBnb;
