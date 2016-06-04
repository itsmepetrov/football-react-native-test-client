import React, { Component, PropTypes } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { infoContainerSelector } from '../../selectors';
import { fetchMatchInfo } from '../../actions/matches';
import moment from 'moment';
import styles from './styles';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchMatchInfo
  }, dispatch);
}

@connect(infoContainerSelector, mapDispatchToProps)
export default class Oreview extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    matchId: PropTypes.string.isRequired,
    fetchMatchInfo: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { matchId, fetchMatchInfo } = this.props;
    fetchMatchInfo(matchId);
  }

  render() {
    console.log(this.props);
    const { match } = this.props;
    const { homeTeam, awayTeam, actions = [] } = match;

    return (
      <ScrollView
        style={styles.scroll}
        onScroll={() => { console.log('onScroll!'); }}>
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
      </ScrollView>
    );
  }
}
