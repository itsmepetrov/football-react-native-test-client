import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import { formatDate } from '../../utils/date';
import styles from './styles';

export default class MatchTimeInfo extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render() {
    const { match } = this.props;

    return (
      <View style={styles.info}>
        <Text style={styles.date}>
          {formatDate(match.date, 'DD MMM YYYY', 'DD/MM/YYYY')}
        </Text>
        <Text style={styles.time}>
          {match.koTime}
        </Text>
      </View>
    );
  }
}
