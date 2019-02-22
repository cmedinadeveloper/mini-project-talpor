import React, { Component } from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Left,
  Title,
  Right,
  Button,
  Icon,
} from 'native-base';

class MainContainer extends Component {
  render() {
    const { children, viewTitle, backButton, navigation } = this.props;
    return (
      <Container>
        <Content>
          <Header>
            {backButton ? (
              <Left style={{ flex: 1 }}>
                <Button
                  onPress={() => {
                    navigation.goBack();
                  }}
                  transparent
                >
                  <Icon name="arrow-back" />
                </Button>
              </Left>
            ) : (
              <Left style={{ flex: 1 }} />
            )}
            <Body style={{ flex: 1 }}>
              <Title>{viewTitle}</Title>
            </Body>
            <Right style={{ flex: 1 }} />
          </Header>
          {/* Render Child Components */}
          {children}
        </Content>
      </Container>
    );
  }
}

export default MainContainer;
