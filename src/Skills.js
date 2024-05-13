import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-100 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SkillBadge name="HTML" color="bg-red-500" />
          <SkillBadge name="CSS" color="bg-blue-500" />
          <SkillBadge name="JavaScript" color="bg-yellow-500" />
          <SkillBadge name="React" color="bg-green-500" />
          <SkillBadge name="Python" color="bg-purple-500" />
          <SkillBadge name="C" color="bg-pink-500" />
          <SkillBadge name="C++" color="bg-gray-500" />
          <SkillBadge name="MySQL" color="bg-teal-500" />
        </div>
      </div>
    </section>
  );
}

const SkillBadge = ({ name, color }) => {
  return (
    <div className={`rounded-full py-3 px-4 ${color} text-white font-semibold text-center transition duration-300 transform hover:scale-105`}>
      {name}
    </div>
  );
}

export default Skills;
