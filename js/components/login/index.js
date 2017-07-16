import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { setUser } from '../../actions/user';
import styles from './styles';

class Login extends Component {
  static propTypes = {
    setUser: PropTypes.func,
  };

  static defaultProps = {
    setUser: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  setUser(name) {
    this.props.setUser(name);
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <View style={styles.bg}>
              <Item style={styles.input}>
                <Icon active name="person" />
                <Input placeholder="EMAIL" onChangeText={name => this.setState({ name })} />
              </Item>
              <Item style={styles.input}>
                <Icon name="unlock" />
                <Input
                  placeholder="PASSWORD"
                  secureTextEntry
                />
              </Item>
              <Button style={styles.btn} onPress={() => Actions.home()}>
                <Text>Login</Text>
              </Button>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    setUser: name => dispatch(setUser(name)),
  };
}

export default connect(null, bindActions)(Login);
