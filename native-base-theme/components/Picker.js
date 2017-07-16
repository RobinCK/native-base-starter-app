import { Platform } from 'react-native';

export default () => (Platform.OS !== 'ios'
  ? {
    '.note': {
      color: '#8F8E95',
    },
    width: 90,
    marginRight: -4,
  }
  : {})
;
