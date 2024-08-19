import React from 'react'
import Section from './section'
import { Card, CardContent, Typography } from '@material-ui/core'
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
            <Typography className='section-title' variant='h1'>annie hu</Typography>
          </ParallaxLayer>
          <ParallaxLayer
           style={{alignItems: 'center', flexDirection: 'column', display: 'flex', justifyContent: 'center'}}
           speed={0.3}
           offset={0}>
            <Card>
              <CardContent>
              <Typography variant="h1">
              Hello World!
              </Typography>

              <Typography variant="subtitle1" align='center' gutterBottom>
                Software developer specialized in backend development using Java and Kotlin. 
              </Typography>

              <Typography variant="subtitle1" align='center' gutterBottom>
                Currently in the videogame industry developing online gameplay services.
              </Typography>


              <Typography variant="subtitle1" align='center' gutterBottom>
                Based in Vancouver, Canada.
              </Typography>
              </CardContent>
            </Card>

          </ParallaxLayer>
        </Section>

        <Section sectionRef={this.props.projectsRef}>
          <ParallaxLayer offset={1} style={{backgroundColor: '#a3e4d7'}}>
            <Typography className='section-title' variant='h1'>projects</Typography>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.8}
            factor={0.45}>
            <img src="runtracker.jpg" alt="Android app to track runs"/>
          </ParallaxLayer> 
          <ParallaxLayer className='projects-section'
            style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
            offset={1}
            speed={0.3}>

            <Card>
              <CardContent>
                <Typography variant="h4">Personal Website</Typography>
                <Typography variant="subtitle1">
                  Written in Javascript using Material UI and React-Spring libraries. It's currently hosted on Github Pages.
                </Typography>
                <Typography variant='subtitle1'>
                  Source code is in my GitHub under <b>anniesh.github.io</b> in the dev branch.
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="h4">Run Tracker App</Typography>
                <Typography variant="subtitle1">
                  Run Tracker is an Android app written in Java that records your runs' path, length, speed, and other stats. This did not encourage me to exercise.
                </Typography>
                <Typography variant='subtitle1'>
                  Source code is in my GitHub under <b>Run-Tracker</b>
                </Typography>
              </CardContent>
            </Card>

          </ParallaxLayer>

        </Section>

        <Section sectionRef={this.props.hobbyRef}>
          <ParallaxLayer 
            offset={2} 
            style={{backgroundColor: '#f1948a'}}>
            <Typography className='section-title' variant='h1'>hobbies</Typography>
          </ParallaxLayer>
          
          <ParallaxLayer className="projects-section"
            style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
            speed={0.3}
            offset={2}>

            <Card>
              <CardContent>
                <Typography variant="h4">Photography</Typography>
                <Typography variant="subtitle1">
                  Capturing the city, landscapes, and the occasional portrait.
                </Typography>

                <Typography variant="subtitle1">
                  <a href="https://www.instagram.com/swyolag/">@swyolag</a>
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <img className="project-photo" src="DSC0834-3.jpg" alt="Yaletown-Roundhouse - Vancouver"/>
                <Typography variant="subtitle1">
                  Yaletown-Roundhouse
                </Typography>
              </CardContent>
            </Card>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            style={{backgroundColor: '#ccd1d1'}}>
            <Typography className='section-title' variant='h1'>hobbies</Typography>
          </ParallaxLayer>

       
          <ParallaxLayer
            style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}
            offset={3}
            speed={0.2}>
            <Card>
              <CardContent>
                <Typography variant="h4">3D Modeling</Typography>
                <Typography variant="subtitle1">
                  Using open-source Blender
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <img className="project-photo" src="pokeball_02.jpg" alt="Pokeball"/>
                <Typography variant="subtitle1">
                  Poké Ball
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