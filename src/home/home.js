import React from 'react'
import Section from './section'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core'
import { Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Menu from '../menu/menu';


class Home extends React.Component {
  AVATAR_SRC = "https://media-exp1.licdn.com/dms/image/C5603AQFZ3jZm-K6YCw/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=WUiBxcadwf8jplZ0osxc1GiFvYtdD5YpCVP6N0i6wvw";

  render() {
    return (
      <div>
        <Menu
          homeScroll={() => this.parallax.scrollTo(0)}
          hobbiesScroll={() => this.parallax.scrollTo(2)}
          projectsScroll={() => this.parallax.scrollTo(1)}/>

        <Parallax className="home" id="content" pages={4} ref={ref => this.parallax = ref}>

        <Section sectionRef={this.props.homeRef}>
          <ParallaxLayer style={{backgroundColor: '#87BCDE'}} offset={0}>
          </ParallaxLayer>
          <ParallaxLayer
           style={{alignItems: 'center', flexDirection: 'column', display: 'flex', justifyContent: 'center'}}
           speed={0.3}
           offset={0}>
            <Avatar 
              className="profile-avatar"
              alt="Annie Hu"
              src={this.AVATAR_SRC}/>
            <Card>
              <CardContent>
              <Typography variant="h1">
              Hello World
            </Typography>
            <Typography variant="subtitle1" align='center' gutterBottom>
              I'm Annie, a software developer specializing in both back-end and front-end development using Java, Scala, or Typescript.
              I've done internships in a start-up, VFX company, and a videogame company doing, QA automation/testing, small projects, and back-end development.
              I currently work at Electronics Arts in Vancouver, where I did my final internship, as a back-end software developer.
            </Typography>
              </CardContent>
            </Card>

          </ParallaxLayer>
        </Section>

        <Section sectionRef={this.props.projectsRef}>
          <ParallaxLayer offset={1} style={{backgroundColor: '#a3e4d7'}}/>
          <ParallaxLayer
            offset={1}
            speed={0.8}
            factor={0.45}>
            <img src="runtracker.jpg" alt="Android app to track runs"/>
          </ParallaxLayer> <ParallaxLayer className='projects-section'
            style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
            offset={1}
            speed={0.3}>
            <Card>
              <CardContent>
              <Typography variant="h1">Projects</Typography>
              <Typography variant="h4">Run Tracker App</Typography>
              <Typography variant="subtitle1">
                Run Tracker is an Android app written in Java that records your runs' path, length, speed, and other stats. Turns out - writing software does not encourage you to exercise.
                Source code is in my GitHub.
            </Typography>
              </CardContent>
            </Card>
          </ParallaxLayer>

        </Section>

        <Section sectionRef={this.props.hobbyRef}>
          <ParallaxLayer 
            offset={2} 
            style={{backgroundColor: '#f1948a'}}/>

          <ParallaxLayer 
            style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
            offset={2}
            speed={0.8}>
            <Card>
              <CardContent>
                <img className="project-photo" src="DSC0834-3.jpg" alt="Yaletown-Roundhouse - Vancouver"/>
              </CardContent>
            </Card>
          </ParallaxLayer>
          
          <ParallaxLayer className="projects-section"
            style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
            speed={0.3}
            offset={2}>

            <Card>
              <CardContent>
                <Typography variant="h4">Photography</Typography>
                <Typography variant="subtitle1">
                  I shoot on a Sony A6000, taking pictures of the city, nature, and the occasional portrait.
                </Typography>
              </CardContent>
            </Card>
          </ParallaxLayer>



          <ParallaxLayer
            offset={3}
            style={{backgroundColor: '#ccd1d1'}}/>
       
          <ParallaxLayer
            style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
            offset={3}
            speed={0.8}>
            <Card>
              <CardContent>
                <img className="project-photo" src="pokeball_02.jpg" alt="Pokeball"/>
              </CardContent>
            </Card>
          </ParallaxLayer>

          <ParallaxLayer className="project-section"
            style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
            speed={0.3}
            offset={3}>
            <Card>
              <CardContent>
                <Typography variant="h4">3D Modeling</Typography>
                <Typography variant="subtitle1">
                  I am currently learning Blender: a great open-source 3D modeling software. 
                </Typography>
              </CardContent>
            </Card>
          </ParallaxLayer>
        </Section>
      </Parallax>
      </div>
    )
  }

}

export default Home