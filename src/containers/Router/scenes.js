import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import Preview from '../Preview';
import Info from '../Info';

// Defining all of your scenes during compile time and use it later within Router
export default Actions.create(
  <Scene key="app" navigationBarStyle={{ backgroundColor: 'white' }}>
    <Scene key="oreview" component={Preview} title="Preview" />
    <Scene key="info" component={Info} title="Info" />
  </Scene>
);
