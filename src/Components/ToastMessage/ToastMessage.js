import { Toast } from 'native-base';

const ToastMessage = (message, duration, type) =>
  Toast.show({
    text: message || '',
    buttonText: 'Okay',
    duration: duration || 5000,
    type: type || 'danger',
  });

export default ToastMessage;
