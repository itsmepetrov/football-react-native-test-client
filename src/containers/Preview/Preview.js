import React, { Component, PropTypes } from 'react';
import { Text, View, ListView, TouchableHighlight } from 'react-native';
import CalendarPicker from '../../components/CalendarPicker';
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

// Container for view Matches for specific day
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

  componentDidMount() {
    const { date, fetchMatchesForDate } = this.props;
    // Fetch mathes for specific date on initial load
    fetchMatchesForDate(date);
  }

  componentWillReceiveProps(nextProps) {
    const { date: prevDate, fetchMatchesForDate} = this.props;
    const { date: nextDate } = nextProps;
    // Fetch mathes for new date
    if (prevDate !== nextDate) {
      fetchMatchesForDate(nextDate);
    }
  }

  handleDateSelect = (date) => {
    const { previewChangeDate, previewHideCalendar } = this.props;
    const normalizedDate = (new Date(date)).getTime();
    previewChangeDate(normalizedDate);
    previewHideCalendar();
  }

  handleShowCalendar = () => {
    this.props.previewShowCalendar();
  }

  handleHideCalendar = () => {
    this.props.previewHideCalendar();
  }

  handleShowMatchInfo = (matchId) => {
    // Transition to Match Info page
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
        <CalendarPicker
          open={showCalendar}
          startDate={formatDate(date, 'YYYY-MM-DD')}
          selectedDate={formatDate(date, 'YYYY-MM-DD')}
          onClose={this.handleHideCalendar}
          onDateSelect={this.handleDateSelect}
        />
        {!showCalendar &&
          <TouchableHighlight
            style={styles.openButton}
            onPress={this.handleShowCalendar}>
            <Text style={styles.buttonText}>
              {formatDate(date, 'DD MMM YYYY')}
            </Text>
          </TouchableHighlight>
        }
      </View>
    );
  }
}
