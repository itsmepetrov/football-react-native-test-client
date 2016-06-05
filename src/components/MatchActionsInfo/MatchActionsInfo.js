import React, { Component, PropTypes } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

export default class MatchActionsInfo extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render() {
    const { match } = this.props;
    const { homeTeam, awayTeam, actions = [] } = match;

    return (
      <View style={styles.actionsInfo}>
        {actions.map((action, index) => (
          <View key={index} style={styles.action}>
            <View style={styles.timeInfo}>
              <Text style={styles.normalText}>
                {action.normalTime}
              </Text>
              <Text style={styles.addedText}>
                {action.addedTime}
              </Text>
            </View>
            <Image
              style={styles.smallTeamBadge}
              source={{ uri: action.teamId === homeTeam.id ?
                homeTeam.badge.url : awayTeam.badge.url
              }}
            />
            <View style={styles.eventInfo}>
              <Text style={styles.normalText}>
                {action.eventType}
              </Text>
              <Text style={styles.addedText}>
                {action.players.map(player => player.name).join(', ')}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
