import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text, Form, Item, Input, Spinner } from 'native-base';
import Firebase from 'react-native-firebase';
import ToastMessage from '../../Components/ToastMessage/ToastMessage';
import { update as updateAuth } from '../../Ducks/AuthReducer/AuthReducer';
import { updateLogin } from '../../Ducks/LoginReducer/LoginReducer';
import MainContainer from '../../Containers/MainContainer/MainContainer';
import InputField from '../../Components/InputField/InputField';
import validate from '../../Utils/ValidationWrapper';
import styles from './styles';

class SignUpScreen extends Component {
  signUp() {
    const {
      email,
      password,
      updateLogin,
      navigation,
      displayName,
      loading,
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
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
          if (data.user) {
            Firebase.auth()
              .currentUser.updateProfile({
                displayName,
              })
              .then(() => {
                updateAuth({
                  displayName,
                  email: data.user.email,
                  uuid: data.user.uid,
                  isLogged: true,
                });
                navigation.navigate('App');
                updateLogin({ loading: false });
              });
          }
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
      displayName,
      displayNameError,
      navigation,
      loading,
    } = this.props;

    return (
      <MainContainer navigation={navigation} backButton viewTitle="Sign Up">
        <View>
          <Form style={styles.form_container}>
            <View>
              <InputField
                onChangeText={value => {
                  updateLogin({ displayName: value });
                }}
                onBlur={() => {
                  updateLogin({
                    errors: {
                      displayNameError: validate('displayName', displayName),
                    },
                  });
                }}
                error={displayNameError}
                style={styles.form_input}
                type="text"
                placeholder="Display Name"
              />
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
                this.signUp();
              }}
              style={styles.form_button}
              block
            >
              {loading === true ? <Spinner /> : <Text>Create Account</Text>}
            </Button>
          </Form>
        </View>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  email: state.Login.email,
  emailError: state.Login.errors.emailError,
  displayName: state.Login.displayName,
  displayNameError: state.Login.errors.displayNameError,
  password: state.Login.password,
  passwordError: state.Login.errors.passwordError,
  loading: state.Login.loading,
});

const mapDispatchToProps = { updateLogin, updateAuth };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen);
