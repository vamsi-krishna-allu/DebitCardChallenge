import {Dimensions, Platform} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const apiHost = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

export const currencyFormat = num => {
  return '$' + num?.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
