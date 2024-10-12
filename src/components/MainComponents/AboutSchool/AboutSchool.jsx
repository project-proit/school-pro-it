import React from 'react';
import "./AboutSchool.css";
import Circle from './Circle';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const AboutSchool = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  return (
    <div id='About' className='container-about'>
        <div className="about-school">
            <div className='about-conteiner'>
                <div><h2 className="about-school-title">О ШКОЛЕ ПРО IT</h2></div>
                <div className="about-school-text">
                    <p>
                        Мы даём шанс окунуться в мир IT-профессий с нуля, и создать настоящий командный или
                        личный проект. Мы учим реализовывать любые
                        IT-идеи и продвигать их.
                    </p>
                </div>
            </div>
        </div>
        <div className="Circles">
            <Circle 
                number={9}
                title1={'в школе'}
                title2={'направлений'}
            />
            <Circle 
                number={7}
                title1={'в интенсивах'}
                title2={'направлений'}
            />
            <Circle 
                number={100}
                title1={'более'}
                title2={'учеников'}
            />
            <Circle 
                number={3}
                title1={'школе'}
                title2={'года'}
            />
        </div>
    </div>
  )
}

export default AboutSchool
