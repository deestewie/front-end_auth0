import {AppRegistry} from 'react-native';
import App from './App';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('WebTest', {
  rootTag: document.getElementById('react-native-app'),
});
