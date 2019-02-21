import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Button, Text, Form, Item, Input } from 'native-base';
import { updateLogin } from '../../Ducks/LoginReducer/LoginReducer';
import MainContainer from '../../Containers/MainContainer/MainContainer';
import InputField from '../../Components/InputField/InputField';
import validate from '../../Utils/ValidationWrapper';
import styles from './styles';

class SignInScreen extends Component {
  render() {
    const {
      email,
      emailError,
      password,
      passwordError,
      updateLogin,
      navigation,
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
            <Button style={styles.form_button} block>
              <Text>Sign In</Text>
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

const mapDispatchToProps = { updateLogin };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
