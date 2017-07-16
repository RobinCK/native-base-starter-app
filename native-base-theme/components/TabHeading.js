import { Platform } from 'react-native';
import variable from './../variables/platform';

export default (variables = variable) => ({
  flexDirection: 'row',
  backgroundColor: variables.tabDefaultBg,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  'NativeBase.Text': {
    color: variables.topTabBarTextColor,
    marginHorizontal: 7,
  },
  'NativeBase.Icon': {
    color: variables.topTabBarTextColor,
    fontSize: (Platform.OS === 'ios') ? 26 : undefined,
  },
  '.active': {
    'NativeBase.Text': {
      color: variables.topTabBarActiveTextColor,
      fontWeight: '600',
    },
    'NativeBase.Icon': {
      color: variables.topTabBarActiveTextColor,
    },
  },
});
