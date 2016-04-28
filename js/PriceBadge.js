/* @flow */

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class PriceBadge extends Component {
  props: {
    price: number;
    instantBook: boolean;
    style: any;
  };

  render() {
    const {price, instantBook, style} = this.props;
    const flash = instantBook &&
      <Image style={styles.flash} source={require('./img/flash.png')} />;
    return (
      <View style={[styles.container, style]}>
        <Text style={styles.price}>
          ${price}
        </Text>
        <Text style={styles.units}>
          USD{'\n'}PER NIGHT
        </Text>
        {flash}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    padding: 5,
  },
  price: {
    fontSize: 18,
    color: 'white',
  },
  units: {
    marginLeft: 2,
    fontSize: 6,
    color: 'white',
  },
  flash: {
    marginLeft: 2,
  },
});

export default PriceBadge;
