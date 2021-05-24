import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import { Typography } from '@material-ui/core';

class Menu extends React.Component {
  render() {
    return (
      <div class='menu'>
        <span id='left-menu'>
          <MenuBtn id='home-btn' label='Annie Hu' onClick={this.props.homeScroll}/>
          <MenuBtn id='projects-btn' label='Projects' onClick={this.props.projectsScroll}/>
          <MenuBtn id='hobby-btn' label='Hobbies' onClick={this.props.hobbiesScroll}/>
        </span>
        <span id='right-menu'>
          <IconBtn id='github-btn' onClick={this.gotoGithub}><GitHubIcon/></IconBtn>
          <IconBtn id='linkedin-btn' onClick={this.gotoLinkedIn}><LinkedInIcon/></IconBtn>
        </span>
      </div>
    );
  };

  gotoLinkedIn() {
    window.open('https://www.linkedin.com/in/annie-hu-81755ba0');
  }

  gotoGithub() {
    window.open('https://github.com/AnnieSH');
  }
}

function MenuBtn(props) {
  return (
    <span className='menu-btn' id={props.id} onClick={props.onClick}>
      <Typography variant='button'>{props.label}</Typography>
    </span>
  );
}

function IconBtn(props) {
  return (
    <span className='icon-btn' onClick={props.onClick}>
      {props.children}
    </span>
  )
}

export default Menu;