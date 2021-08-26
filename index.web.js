import App from './src/App';
import {AppRegistry} from 'react-native';

// register the app
AppRegistry.registerComponent('App', () => App);

// web enterance
AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('react-app'),
});
