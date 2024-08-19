import React from 'react';
import { Typography } from '@material-ui/core';
// import Box from '@material-ui/core/Box'

class Section extends React.Component {
  render() {
    return (
      <div class='section'>
        <Typography variant="h2" className="section-header" ref={this.props.sectionRef}>{this.props.title}</Typography>
        {this.props.children}
      </div>
    );
  };
}

export default Section;