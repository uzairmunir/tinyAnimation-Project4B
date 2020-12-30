import React from 'react'
import Typing from 'react-typing-animation'
import Common from './Common'
import animation2 from './imges/animation.gif'
import styles from '../App.css'


const About = () => {
    return (
        <div>
           <Common
           name="Welcome to About Page"
           imgsrc={animation2}
           btn="Contact Us"
           />
          <div className="container-fluid col-10 mx-auto text-center">
              <h1 className="mb-5">Our team</h1>
              <div className="row">
                  <div className="col-md-4 col-10">
                      <figure>
                          <img src="https://scontent.fisb5-1.fna.fbcdn.net/v/t1.0-9/52601947_2296391420617402_8053650020345315328_o.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=h7ucWPjIPXYAX_YgfJ3&_nc_ht=scontent.fisb5-1.fna&oh=f013994ebb6906e8f4b65668b17c371a&oe=600F36F6"
                           className="img-fluid rounded-circle" id="team-img"/>
                          <figcaption>
                              <Typing>
                                  <Typing.Delay ms={3000}/>
                                  <h4>Uzair Munir</h4>
                              </Typing>
                          </figcaption>
                      </figure>
                  </div>
                  <div className="col-md-4 col-10">
                      <figure>
                          <img src="https://scontent.fisb5-1.fna.fbcdn.net/v/t1.0-0/p526x296/85206510_3086313314714483_96422780299378688_o.jpg?_nc_cat=100&ccb=2&_nc_sid=0debeb&_nc_ohc=BQcEozdepdcAX9B7SbZ&_nc_ht=scontent.fisb5-1.fna&tp=6&oh=f054105bf2a03cff8860f7102e54c002&oe=60108104" 
                          className="img-fluid rounded-circle" id="team-img"/>
                          <figcaption>
                              <Typing>
                                  <Typing.Delay ms={3000}/>
                                  <h4>Ali Afzal</h4>
                              </Typing>
                          </figcaption>
                      </figure>
                  </div>
                  <div className="col-md-4 col-10">
                      <figure>
                          <img src="https://scontent.fisb5-1.fna.fbcdn.net/v/t1.0-9/62639779_2389349841347586_3004240339771850752_n.jpg?_nc_cat=101&ccb=2&_nc_sid=174925&_nc_ohc=dEreQJLsxaMAX8WRBpX&_nc_ht=scontent.fisb5-1.fna&oh=31850f8d123de245166f4e11cc83d6b2&oe=60109AE6" 
                          className="img-fluid rounded-circle" id="team-img"/>
                          <figcaption>
                              <Typing>
                                  <Typing.Delay ms={3000}/>
                                  <h4>Salman Jamil</h4>
                              </Typing>
                          </figcaption>
                      </figure>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default About
