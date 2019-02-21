import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  form_input: {
    marginTop: 10,
  },
  form_button: {
    margin: 20,
  },
  form_container: {
    marginRight: 15,
  },
});
