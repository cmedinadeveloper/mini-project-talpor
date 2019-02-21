import React, { Component } from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Left,
  Title,
  Right,
} from 'native-base';

class MainContainer extends Component {
  render() {
    const { children, viewTitle } = this.props;
    return (
      <Container>
        <Content>
          <Header>
            <Left />
            <Body>
              <Title>{viewTitle}</Title>
            </Body>
            <Right />
          </Header>
          {/* Render Child Components */}
          {children}
        </Content>
      </Container>
    );
  }
}

export default MainContainer;
