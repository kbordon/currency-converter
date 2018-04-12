// entry point to application

import React from 'react';
import Home from './screens/Home';
import EStyleSheet from 'react-native-extended-stylesheet';

// need before app builds
EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF'
})

export default () => <Home /> ;