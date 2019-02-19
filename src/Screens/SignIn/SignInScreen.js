import React, { Component } from 'react';
import { Screen, Button } from '@shoutem/ui';

export default class App extends Component {
  render() {
    return (
      <Screen styleName="paper">
        <Button>
          <Text>CHECK IN HERE</Text>
        </Button>
      </Screen>
    );
  }
}
