import { Platform } from 'react-native';
import variable from './../variables/platform';

export default (variables = variable) => ({
  elevation: 3,
  height: 50,
  flexDirection: 'row',
  shadowColor: (variables.platformStyle === 'material') ? '#000' : undefined,
  shadowOffset: (variables.platformStyle === 'material') ? { width: 0, height: 2 } : undefined,
  shadowOpacity: (variables.platformStyle === 'material') ? 0.2 : undefined,
  shadowRadius: (variables.platformStyle === 'material') ? 1.2 : undefined,
  justifyContent: 'space-around',
  borderBottomWidth: (Platform.OS === 'ios') ? variables.borderWidth : 0,
  borderColor: variables.topTabBarBorderColor,
});
