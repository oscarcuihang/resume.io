import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Layout, Row, Col } from 'antd';

const { Header } = Layout;

class AppHeader extends Component {
  static propTypes = {
    contacts: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      profiles: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string,
        url: PropTypes.string,
      })),
    }).isRequired,
  }

  render() {
    return (
      <Header>
        <Row>
          <Col span={12}>
            <h1> {this.props.contacts.name} </h1>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default AppHeader;