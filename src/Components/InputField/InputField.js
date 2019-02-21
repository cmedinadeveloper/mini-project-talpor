import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Input, Item, Icon, Label, Form } from 'native-base';
import styles from './styles';

const InputField = ({
  floatingLabel,
  rounded,
  placeholder,
  error,
  style,
  type,
  onBlur,
  onChangeText,
}) => (
  <Form>
    <Item
      style={style}
      error={!!error}
      rounded={!!rounded}
      floatingLabel={!!floatingLabel}
    >
      {floatingLabel ? <Label>Username</Label> : null}
      {type === 'email' ? <Icon active name="mail" /> : null}
      {type === 'password' ? <Icon active name="key" /> : null}
      {type === 'text' ? <Icon active name="user" /> : null}
      <Input
        onBlur={onBlur}
        onChangeText={onChangeText}
        placeholder={placeholder || ''}
        secureTextEntry={type === 'password'}
      />
    </Item>
    {error ? (
      <View style={styles.error_message_box}>
        <Text>{error}</Text>
      </View>
    ) : null}
  </Form>
);

export default InputField;
