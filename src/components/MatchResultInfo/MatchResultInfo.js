import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default class MatchResultInfo extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render() {
    const { match } = this.props;
    const { homeTeam, awayTeam } = match;

    return (
      <View>
        <View style={styles.matchResult}>
          <Text style={styles.teamResult}>
            {homeTeam.score}
          </Text>
          <Text style={styles.resultSpace}>
            -
          </Text>
          <Text style={styles.teamResult}>
            {awayTeam.score}
          </Text>
        </View>
        <View style={styles.scorersInfo}>
          <View style={styles.scorersItems}>
            {homeTeam.scorers.map((scorer, index) => (
              <Text key={index} style={styles.homeScorerName}>
                {scorer}
              </Text>
            ))}
          </View>
          <View style={styles.scorersItems}>
          {awayTeam.scorers.map((scorer, index) => (
            <Text key={index} style={styles.awayScorerName}>
              {scorer}
            </Text>
          ))}
          </View>
        </View>
      </View>
    );
  }
}
