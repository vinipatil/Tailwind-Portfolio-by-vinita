import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


const About = () => {

  return (
    <section id="about" className="py-8 lg:py-24 bg-gradient-to-r from-purple-300 to-orange-200 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/4 mb-8 lg:mb-0 lg:mr-20 lg:ml-20">
            <img src="https://media.defense.gov/2020/Jul/16/2002458242/-1/-1/0/200716-A-A1403-004.JPG" alt="Profile" className="rounded-full" />
          </div>
          <div className="lg:flex-1  p-1">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-left lg:ml-20">About Me</h2>
            <p className="text-xl lg:text-2xl ml-0 lg:ml-20 text-center lg:text-left lg:w-3/4">I'm a passionate developer with a love for clean code and elegant solutions. With a keen eye for detail and a commitment to excellence, I strive to deliver high-quality code that not only meets the requirements but also exceeds expectations. I believe in continuous learning and am always exploring new technologies and best practices to enhance my skills and stay up-to-date with the latest developments in the field.</p>
            <div className="flex justify-center lg:justify-start mt-4 lg:mt-8 ml-0 lg:ml-20">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
