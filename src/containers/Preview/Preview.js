import React, { Component, PropTypes } from 'react';
import { Animated, Text, View, ListView, TouchableHighlight } from 'react-native';
import PreviewItem from '../../components/PreviewItem';
import Calendar from 'react-native-calendar';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { previewContainerSelector } from '../../selectors';
import { fetchMatchesForDate } from '../../actions/matches';
import {
  previewChangeDate,
  previewShowCalendar,
  previewHideCalendar
} from '../../actions/preview';
import { formatDate } from '../../utils/date';
import styles from './styles';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.id !== r2.id
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    previewChangeDate,
    previewShowCalendar,
    previewHideCalendar,
    fetchMatchesForDate
  }, dispatch);
}

@connect(previewContainerSelector, mapDispatchToProps)
export default class Preview extends Component {
  static propTypes = {
    date: PropTypes.number.isRequired,
    matches: PropTypes.array.isRequired,
    showCalendar: PropTypes.bool.isRequired,
    previewChangeDate: PropTypes.func.isRequired,
    previewShowCalendar: PropTypes.func.isRequired,
    previewHideCalendar: PropTypes.func.isRequired,
    fetchMatchesForDate: PropTypes.func.isRequired
  }

  state = {
    fadeAnim: new Animated.Value(this.props.showCalendar ? 0 : -320)
  }

  componentDidMount() {
    const { date, fetchMatchesForDate } = this.props;
    fetchMatchesForDate(date);
  }

  componentWillReceiveProps(nextProps) {
    const { date: prevDate, fetchMatchesForDate} = this.props;
    const { date: nextDate } = nextProps;
    if (prevDate !== nextDate) {
      fetchMatchesForDate(nextDate);
    }
  }

  handleDateSelect = (date) => {
    console.log(date);
    const { previewChangeDate } = this.props;
    const normalizedDate = (new Date(date)).getTime();
    previewChangeDate(normalizedDate);
    this.handleHideCalendar();
  }

  handleShowCalendar = () => {
    this.props.previewShowCalendar();
    Animated.timing(
       this.state.fadeAnim,
       { toValue: 0 }
     ).start();
  }

  handleHideCalendar = () => {
    this.props.previewHideCalendar();
    Animated.timing(
       this.state.fadeAnim,
       { toValue: -320 }
     ).start();
  }

  handleShowMatchInfo = (matchId) => {
    Actions.info({ matchId });
    this.handleHideCalendar();
  }

  render() {
    const { date, matches, showCalendar } = this.props;
    const dataSource = ds.cloneWithRows(matches);

    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections
          dataSource={dataSource}
          renderRow={(match) =>
            <PreviewItem
              key={match.id}
              match={match}
              onPress={() => this.handleShowMatchInfo(match.id)}
            />
          }
        />
        <Animated.View style={[styles.calendar, { bottom: this.state.fadeAnim }]}>
          <Calendar
            showControls
            scrollEnabled
            startDate={formatDate(date, 'YYYY-MM-DD')}
            selectedDate={formatDate(date, 'YYYY-MM-DD')}
            onDateSelect={this.handleDateSelect}
          />
          <TouchableHighlight
            style={styles.closeButton}
            onPress={this.handleHideCalendar}>
            <Text style={styles.buttonText}>
              Close
            </Text>
          </TouchableHighlight>
        </Animated.View>
        {!showCalendar &&
          <TouchableHighlight
            style={styles.openButton}
            onPress={this.handleShowCalendar}>
            <Text style={styles.buttonText}>
              {formatDate(date, 'DD.MM.YYYY')}
            </Text>
          </TouchableHighlight>
        }
      </View>
    );
  }
}
