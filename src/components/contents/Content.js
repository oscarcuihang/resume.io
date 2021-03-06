import React, { Component } from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types'

import Education from './Education'
import Projects from './Project'
import Experiences from './Experience'

const { Content } = Layout;

class AppContent extends Component {
  static propTypes = {
    myData: PropTypes.object.isRequired,
  }

  renderEducationSection() {
    if (this.props.myData.educations.length < 1) {
      return null;
    }
    return (<Education educations={this.props.myData.educations} />);
  }

  renderProjectSection() {
    if (this.props.myData.otherProjects.length < 1) {
      return null;
    }
    return (<Projects projects={this.props.myData.otherProjects} />);
  }

  renderExperienceSection() {
    if (this.props.myData.professionalExperiences.length < 1) {
      return null;
    }
    return (<Experiences experiences={this.props.myData.professionalExperiences} />);
  }

  render() {
    return (
      <Content>
        {this.renderEducationSection()}
        {this.renderExperienceSection()}
        {this.renderProjectSection()}
      </Content>
    );
  }
}

export default AppContent;