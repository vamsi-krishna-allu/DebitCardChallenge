import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import DebitCardScreen from '../screens/DebitCard/DebitCardScreen';
import SpendingLimit from '../screens/WeeklySpendingLimit/SpendingLimitScreen';
import TopupAccount from '../screens/TopupAccount/TopupAccountScreen';
import NewCard from '../screens/NewCard/GetNewCardScreen';
import DeactivatedCard from '../screens/DeactivatedCards/ViewDeactivedCards';

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
  TopUp: {
    screen: TopupAccount,
    navigationOptions: () => ({
      title: 'Top Up Account',
      headerBackTitle: 'Back',
    }),
  },
  SelectNewCard: {
    screen: NewCard,
    navigationOptions: () => ({
      title: 'Select New card',
      headerBackTitle: 'Back',
    }),
  },
  ViewInactiveCards: {
    screen: DeactivatedCard,
    navigationOptions: () => ({
      title: 'View Deactivated Cards',
      headerBackTitle: 'Back',
    }),
  },
});

export default createAppContainer(ScreenNavigator);
