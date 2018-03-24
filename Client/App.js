/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import { Navigation } from 'react-native-navigation';

 import  AddCard  from './screens/addCard';
 import  History  from './screens/history';
 import  Main     from './screens/main';

 export default () => {
   Navigation.registerComponent('AddCard', () => AddCard);
   Navigation.registerComponent('History', () => History);
   Navigation.registerComponent('Main', () => Main);

   Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'AddCard',
        screen: 'AddCard',
        title: 'Screen One'
      },
      {
        label: 'history',
        screen: 'History',
        title: 'Screen Two'
      }
    ],
  });
};
