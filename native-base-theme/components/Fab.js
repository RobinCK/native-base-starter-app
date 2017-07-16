import { Platform } from 'react-native';

export default () => ({
  'NativeBase.Button': {
    alignItems: 'center',
    padding: null,
    justifyContent: 'center',
    'NativeBase.Icon': {
      alignSelf: 'center',
    },
    'NativeBase.IconNB': {
      alignSelf: 'center',
      fontSize: 20,
      lineHeight: (Platform.OS === 'ios') ? 24 : undefined,
    },
  },
});
