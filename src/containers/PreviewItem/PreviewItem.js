import React, { Component, PropTypes } from 'react';
import { Text, View, ListView, Image, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class PreviewItem extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
  }

  render() {
    const { match, onPress } = this.props;
    const { homeTeam, awayTeam } = match;
    const infoText = match.result

    return (
      <TouchableHighlight
        onPress={onPress}>
        <View
          key={match.id}
          style={styles.container}>
          <Text style={styles.homeTeam}>
            {homeTeam.name}
          </Text>
          <Image
            style={styles.badge}
            source={{ uri: homeTeam.badge.url }}
          />
          {match.result &&
            <Text style={styles.result}>
              {homeTeam.score} - {awayTeam.score}
            </Text>
          }
          {!match.result &&
            <Text style={styles.result}>
              {match.koTime}
            </Text>
          }
          <Image
            style={styles.badge}
            source={{ uri: awayTeam.badge.url }}
          />
          <Text style={styles.awayTeam}>
            {awayTeam.name}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
