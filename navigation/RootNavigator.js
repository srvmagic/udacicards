import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';
import * as colors from "../utils/colors";

import TabNavigator from './MainTabNavigator';
import DeckDetail from '../components/DeckDetail';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';
//import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: TabNavigator,
      navigationOptions : { ...navigationOptions, title: 'Quizlet' }
    },
    DeckDetail: {
      screen: DeckDetail,
      navigationOptions : { ...navigationOptions, title: 'QuizCards' }
      
    },
    AddCard: {
      screen: AddCard,
      navigationOptions : { ...navigationOptions, title: 'Add A Card' }
      
    },    
    Quiz: {
      screen: Quiz,
      navigationOptions : { ...navigationOptions, title: 'Quiz' }
      
    },    
  }
);

const navigationOptions = {
  headerTintColor: colors.purple,
  headerTitleStyle: {
    fontWeight: 'normal',
  },  
  headerStyle: {
    backgroundColor: colors.purple
}  
}

export default class RootNavigator extends React.Component {
  componentDidMount() {
   // this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    //this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    //registerForPushNotificationsAsync();

    // Watch for incoming notifications
    //this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  // _handleNotification = ({ origin, data }) => {
  //   console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  // };
}
