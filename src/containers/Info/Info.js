import React, { Component, PropTypes } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import MatchTimeInfo from '../../components/MatchTimeInfo';
import MatchTeamInfo from '../../components/MatchTeamInfo';
import MatchResultInfo from '../../components/MatchResultInfo';
import MatchActionsInfo from '../../components/MatchActionsInfo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { infoContainerSelector } from '../../selectors';
import { fetchMatchInfo } from '../../actions/matches';
import styles from './styles';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchMatchInfo
  }, dispatch);
}

// Container for view specific Match
@connect(infoContainerSelector, mapDispatchToProps)
export default class Info extends Component {
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
    const { match } = this.props;

    return (
      <ScrollView style={styles.scroll}>
        <MatchTeamInfo match={match} />
        {!match.result && <MatchTimeInfo match={match} />}
        {match.result && <MatchResultInfo match={match} />}
        {match.result && <MatchActionsInfo match={match} />}
      </ScrollView>
    );
  }
}
