import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Card, CardItem, Text, Body, Button } from 'native-base';
import Firebase from 'react-native-firebase';
import { logout } from '../../Ducks/AuthReducer/AuthReducer';
import MainContainer from '../../Containers/MainContainer/MainContainer';

class HomeScreen extends Component {
  logout() {
    const { navigation, logout } = this.props;
    Firebase.auth()
      .signOut()
      .then(() => {
        logout();
        navigation.navigate('Auth');
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { displayName, email } = this.props;

    return (
      <MainContainer viewTitle="Home">
        <View>
          <Card>
            <CardItem header>
              <Text>{`Welcome ${displayName}`}</Text>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-built_white.png',
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Text>{`Your registered email is ${email}`}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button
                onPress={() => {
                  this.logout();
                }}
              >
                <Text>Logout</Text>
              </Button>
            </CardItem>
          </Card>
        </View>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  email: state.Auth.email,
  displayName: state.Auth.displayName,
});

const mapDispatchToProps = { logout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
