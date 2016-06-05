import React, { Component, PropTypes } from 'react';
import { Animated, Text, TouchableHighlight } from 'react-native';
import Calendar from 'react-native-calendar';
import styles from './styles';

export default class Preview extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    startDate: PropTypes.string.isRequired,
    selectedDate: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onDateSelect: PropTypes.func.isRequired
  }

  state = {
    fadeAnim: new Animated.Value(this.props.open ? 0 : -320)
  }

  componentWillReceiveProps(nextProps) {
    const { open: prevOpen } = this.props;
    const { open: nextOpen } = nextProps;
    if (prevOpen !== nextOpen) {
      if (nextOpen) {
        this.handleOpenAnimation();
      } else {
        this.handleCloseAnimation();
      }
    }
  }

  handleCloseAnimation = () =>  {
    Animated.timing(this.state.fadeAnim, {
      toValue: -320
    }).start();
  }

  handleOpenAnimation = () => {
    Animated.timing(this.state.fadeAnim, {
      toValue: 0
    }).start();
  }

  render() {
    const { startDate, selectedDate, onDateSelect, onClose } = this.props;

    return (
      <Animated.View style={[styles.calendar, { bottom: this.state.fadeAnim }]}>
        <Calendar
          showControls
          scrollEnabled
          startDate={startDate}
          selectedDate={selectedDate}
          onDateSelect={onDateSelect}
        />
        <TouchableHighlight
          style={styles.closeButton}
          onPress={onClose}>
          <Text style={styles.buttonText}>
            Close
          </Text>
        </TouchableHighlight>
      </Animated.View>
    );
  }
}
