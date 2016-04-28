/* @flow */

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { fetch } from 'fetch';
import RatingText from './RatingText';
import PriceBadge from './PriceBadge';
import LikeButton from './LikeButton';

import type { Listing } from './data';

class ListingCell extends Component {
  props: {
    listing: Listing;
    isLiked: boolean;
    onLike: Function;
  };

  render() {
    const {listing, isLiked, onLike} = this.props;
    return (
      <View>
        <Image
          style={styles.image}
          source={{uri: listing.previewImageURL}}>
          <PriceBadge
            price={listing.price}
            instantBook={listing.instantBook}
            style={styles.priceBadge}
          />
        </Image>
        <View style={styles.info}>
          <View style={styles.main}>
            <Text style={styles.name}>
              {listing.name}
            </Text>
            <Text style={styles.details}>
              {listing.typeText}
              {' • '}
              <RatingText
                value={listing.starRating}
                count={listing.reviewsCount}
              />
              {' • '}
              {listing.location}
            </Text>
          </View>
          <LikeButton isLiked={isLiked} onPress={onLike} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  info: {
    padding: 16,
    flexDirection: 'row',
  },
  main: {
    flex: 1,
  },
  name: {
    fontSize: 17,
    color: '#333',
    marginBottom: 4,
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
  image: {
    height: 150,
  },
  priceBadge: {
    position: 'absolute',
    left: 0,
    bottom: 20,
  },
});

export default ListingCell;
