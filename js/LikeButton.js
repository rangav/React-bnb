/* @flow */

import React, {
  Component,
  Image,
  TouchableOpacity,
} from 'react-native';

class LikeButton extends Component {
  props: {
    isLiked: boolean;
    onPress: Function;
  };

  render() {
    const source = this.props.isLiked
      ? require('./img/liking.png')
      : require('./img/like.png');
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image source={source} />
      </TouchableOpacity>
    );
  }
}

export default LikeButton;
