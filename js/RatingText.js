/* @flow */

import React, { Component, Text, Image } from 'react-native';

class RatingText extends Component {
  props: {
    value: number;
    count: number;
  };

  render() {
    const {count, value} = this.props;
    const stars = [];
    for (let star = 1; star <= 5; star++) {
      const source = value >= star
        ? require('./img/star_full.png')
        : require('./img/star_empty.png');
      stars.push(<Image key={star} source={source} />);
    }
    return (
      <Text>
        {stars}
        {' '}
        ({count})
      </Text>
    )
  }
}

export default RatingText;
