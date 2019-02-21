import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import Firebase from 'react-native-firebase';
import { Button, Text, Form, Spinner, Input } from 'native-base';
import { update as updateAuth } from '../../Ducks/AuthReducer/AuthReducer';
import ToastMessage from '../../Components/ToastMessage/ToastMessage';
import { updateLogin } from '../../Ducks/LoginReducer/LoginReducer';
import MainContainer from '../../Containers/MainContainer/MainContainer';
import InputField from '../../Components/InputField/InputField';
import validate from '../../Utils/ValidationWrapper';
import styles from './styles';

class SignInScreen extends Component {
  signIn() {
    const {
      email,
      password,
      updateLogin,
      navigation,
      loading,
      updateAuth,
    } = this.props;

    const emailError = validate('email', email);
    const passwordError = validate('password', password);
    updateLogin({
      errors: {
        emailError,
        passwordError,
      },
    });

    if (!emailError && !passwordError && loading === false) {
      updateLogin({ loading: true });
      Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
          updateAuth({
            displayName: data.user.displayName,
            email: data.user.email,
            uuid: data.user.uid,
            isLogged: true,
          });
          navigation.navigate('App');
          updateLogin({ loading: false });
        })
        .catch(error => {
          const { code, message } = error;
          console.log(`Error code ${code}, ${message}`);
          updateLogin({ loading: false });
          ToastMessage(message);
        });
    }
  }

  render() {
    const {
      email,
      emailError,
      password,
      passwordError,
      updateLogin,
      navigation,
      loading,
    } = this.props;

    return (
      <MainContainer viewTitle="Sign In">
        <View>
          <Form>
            <View style={styles.form_container}>
              <InputField
                onChangeText={value => {
                  updateLogin({ email: value });
                }}
                onBlur={() => {
                  updateLogin({
                    errors: {
                      emailError: validate('email', email),
                    },
                  });
                }}
                error={emailError}
                style={styles.form_input}
                type="email"
                placeholder="Email"
              />
              <InputField
                onChangeText={value => updateLogin({ password: value })}
                onBlur={() => {
                  updateLogin({
                    errors: {
                      passwordError: validate('password', password),
                    },
                  });
                }}
                error={passwordError}
                style={styles.form_input}
                type="password"
                placeholder="Password"
              />
            </View>
            <Button
              onPress={() => {
                this.signIn();
              }}
              style={styles.form_button}
              block
            >
              {loading === true ? <Spinner /> : <Text>Sign In</Text>}
            </Button>
          </Form>
          <View style={{ margin: 20, alignSelf: 'center' }}>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            >
              <Text>Create Account</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  email: state.Login.email,
  emailError: state.Login.errors.emailError,
  password: state.Login.password,
  passwordError: state.Login.errors.passwordError,
  loading: state.Login.loading,
});

const mapDispatchToProps = { updateLogin, updateAuth };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
