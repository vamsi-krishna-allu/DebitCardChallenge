import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import DebitCardScreen from '../screens/DebitCard/DebitCardScreen';
import SpendingLimit from '../screens/WeeklySpendingLimit/SpendingLimitScreen';

const ScreenNavigator = createStackNavigator({
  CardScreen: {
    screen: DebitCardScreen,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
  SpendingLimit: {
    screen: SpendingLimit,
    navigationOptions: () => ({
      title: 'Update Spending Limit',
      headerBackTitle: 'Back',
    }),
  },
});

export default createAppContainer(ScreenNavigator);
