import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import Preview from '../Preview';
import Info from '../Info';

export default Actions.create(
  <Scene key="app" navigationBarStyle={{ backgroundColor: 'white' }}>
    <Scene key="oreview" component={Preview} title="Preview" />
    <Scene key="info" component={Info} title="Info" />
  </Scene>
);
