import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from './me.gif';

const About = () => {
  return (
    <section id="about" className="py-8 lg:py-24 bg-gradient-to-r from-red-300 to-purple-300 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/4 mb-8 lg:mb-0 lg:mr-20 lg:ml-20 mt-16">
            <img src={Image} alt="Profile"/>
          </div>
          <div className="lg:flex-1  p-1 mt-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-left lg:ml-20">About Me</h2>
            <p className="text-xl lg:text-2xl ml-0 lg:ml-20 text-center lg:text-left lg:w-3/4">Hello, I'm a passionate developer with a love for clean code and elegant solutions. With a keen eye for detail and a commitment to excellence, I strive to deliver high-quality code that not only meets the requirements but also exceeds expectations. I believe in continuous learning and am always exploring new technologies and best practices to enhance my skills and stay up-to-date with the latest developments in the field.</p>
            <div className="flex justify-center lg:justify-start mt-4 lg:mt-8 ml-0 lg:ml-20">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mr-8 hover:text-pink-900 text-xl">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-8 hover:text-blue-700 text-xl">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mr-8 hover:text-blue-700 text-xl">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-700 text-xl">
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
