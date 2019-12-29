import React, { createRef } from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div class='menu'>
        <span id='left-menu'>
          <MenuBtn id='home-btn' label='Home' onClick={this.scrollToRef(this.props.homeRef)}/>
          <MenuBtn id='projects-btn' label='Projects' onClick={this.scrollToRef(this.props.projectsRef)}/>
          <MenuBtn id='hobby-btn' label='Hobbies' onClick={this.scrollToRef(this.props.hobbyRef)}/>
        </span>
        <span id='right-menu'>
          <MenuBtn id='github-btn' label='Github' onClick={this.gotoGithub}/>
          <MenuBtn id='linkedin-btn' label='LinkedIn' onClick={this.gotoLinkedIn}></MenuBtn>
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

  scrollToRef(ref) {
    return () => {
      ref.current.scrollIntoView({behavior: 'smooth', block: 'end'})
    };
  }
}

function MenuBtn(props) {
  return (
    <span className='menu-btn' id={props.id} onClick={props.onClick}>
      {props.label}
    </span>
  );
}

export default Menu;