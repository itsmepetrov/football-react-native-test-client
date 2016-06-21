import React from 'react';
import { Router } from 'react-native-router-flux';
import scenes from './scenes';

// For routing we use router for React Native
// based on new React Native Navigation API.
// More info about react-native-router-flux you can find here: https://github.com/aksonov/react-native-router-flux

const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: '#fff',
  shadowColor: 'black',
  shadowOffset: { width: 2, height: 4 },
  shadowOpacity: 0.5,
  shadowRadius: 3,
})

export default () => (
  <Router
    scenes={scenes}
    getSceneStyle={getSceneStyle}
  />
)
