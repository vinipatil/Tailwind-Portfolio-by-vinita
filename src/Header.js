import React from 'react';

const Header = () => {
  const handleNavClick = (sectionId, event) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-blue-700 text-white py-4 px-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-3xl font-bold cursor-pointer" onClick={() => scrollToSection('about')}>Vinita Vikram Patil</h1>
        <nav>
          <ul className="flex space-x-4 md:space-x-8">
            <li><a href="#" className="text-sm md:text-base font-medium hover:text-gray-200" onClick={(e) => handleNavClick('about', e)}>About</a></li>
            <li><a href="#" className="text-sm md:text-base font-medium hover:text-gray-200" onClick={(e) => handleNavClick('education', e)}>Education</a></li>
            <li><a href="#" className="text-sm md:text-base font-medium hover:text-gray-200" onClick={(e) => handleNavClick('skills', e)}>Skills</a></li>
            <li><a href="#" className="text-sm md:text-base font-medium hover:text-gray-200" onClick={(e) => handleNavClick('projects', e)}>Projects</a></li>
            <li><a href="#" className="text-sm md:text-base font-medium hover:text-gray-200" onClick={(e) => handleNavClick('contact', e)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
