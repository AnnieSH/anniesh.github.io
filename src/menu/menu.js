import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <div class='menu'>
        <span id='left-menu'>
          <MenuBtn id='home-btn' label='Home'/>
          <MenuBtn id='projects-btn' label='Projects'/>
        </span>
        <span id='right-menu'>
          <MenuBtn id='github-btn' imgsrc='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' label='Github'/>
          <MenuBtn id='linkedin-btn' label='LinkedIn'></MenuBtn>
        </span>
      </div>
    );
  };
}

function MenuBtn(props) {
  return (
    <a className='menu-btn' id={props.id}>
      {props.label}
    </a>
  );
}

export default Menu;