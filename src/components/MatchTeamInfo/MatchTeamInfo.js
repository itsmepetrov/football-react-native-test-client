import React, { Component, PropTypes } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

export default class MatchTeamInfo extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render() {
    const { match } = this.props;
    const { homeTeam, awayTeam } = match;

    return (
      <View style={styles.teamInfo}>
        <View style={styles.homeTeam}>
          <Image
            style={styles.teamBadge}
            source={{ uri: homeTeam.badge.url }}
          />
          <Text style={styles.teamName}>
            {homeTeam.name}
          </Text>
        </View>
        <View style={styles.awayTeam}>
          <Image
            style={styles.teamBadge}
            source={{ uri: awayTeam.badge.url }}
          />
          <Text style={styles.teamName}>
            {awayTeam.name}
          </Text>
        </View>
      </View>
    );
  }
}
