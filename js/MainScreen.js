import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { fetch } from 'fetch';

// TASK #2. Change text color and make it bigger. Add some margin between text and image.
//          Make the content centered
// TASK #3: Make image tappable (see TouchableOpacity or TouchableHighlight)
// TASK #4: Uncomment the query in `componentDidMount`
// TASK #5. Show number of listings instead of "Hello, fox!"
// TASK #6. Render listing titles. For every record you want to render its own <Text />
// TASK #7. Extract secret view into its own component. Add more info. Make the list scrollable
// TASK #8. Add ability to like listings

class ReactBnb extends Component {
  constructor() {
    super();
    this.state = { listings: [] };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.foxImage} source={{uri: 'http://i.imgur.com/bmlBvRN.png'}} />
        <View style={{marginTop: 20}}>
          <Text style={styles.helloText}>Hello, fox!</Text>
        </View>
      </View>
    );
  }

  componentDidMount() {
    // fetch('https://gist.githubusercontent.com/frantic/892564944e2230ee712a76f2a214365d/raw/f70108c5d089f3316fc0dd1386ec2074287fedbe/listings.json')
    //   .then(response => response.json())
    //   .then((data) => {
    //     console.log('Response from API:', data);
    //     this.setState({listings: data});
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
