import React from 'react'
import Section from './section'
import { Avatar, Typography } from '@material-ui/core'


class Home extends React.Component {
  AVATAR_SRC = "https://media-exp1.licdn.com/dms/image/C5603AQFZ3jZm-K6YCw/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=WUiBxcadwf8jplZ0osxc1GiFvYtdD5YpCVP6N0i6wvw";

  render() {
    return (
      <div className="home" id="content">
        <Section sectionRef={this.props.homeRef} title="Hello World ">
          <Avatar 
            className="profile-avatar"
            alt="Annie Hu"
            src={this.AVATAR_SRC}/>
          I'm Annie, a software developer specializing in both back-end and front-end development using Java, Scala, or Typescript.
          I've done internships in a start-up, VFX company, and a videogame company doing anywhere from QA automation and testing, small projects, and server  development.
          I currently work at Electronics Arts in Vancouver, where I did my final internship, as a back-end software developer.
        </Section>
        <Section sectionRef={this.props.projectsRef} title='Projects'>
          <div className='projects-section'>
            <Typography variant="h4">Run Tracker App</Typography>
            <img className="project-photo" 
              src="runtracker.jpg" 
              alt="Run Tracker"/>
            Run Tracker is an Android app written in Java that records your runs' path, length, speed, and other stats. Turns out - writing software does not encourage you to exercise.
          </div>
        </Section>
        <Section sectionRef={this.props.hobbyRef} title='Hobbies'>
          <div className="projects-section">
            <Typography variant="h4">Photography</Typography>
            <img className="project-photo" src="_DSC0834-3.jpg" alt="Yaletown-Roundhouse"/>
            I shoot on a Sony A6000, taking pictures of the city, nature, and the occasional portrait.
          </div>
          <div className="project-section">
            <Typography variant="h4">3D Modeling</Typography>
            <img className="project-photo" src="pokeball_02.png" alt="Pokeball"/>
            Blender is a great, open-source tool. I use it for the occasional fun project and hope to get into more complex designs and simulations in the future.
          </div>
        </Section>
      </div>
    )
  }

}

export default Home