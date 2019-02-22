import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  error_message_box: {
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
