import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-100 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center">Skills</h2><br></br>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-20">
          <RoundProgressBar skill="HTML" percentage={90} color="#EF4444" />
          <RoundProgressBar skill="CSS" percentage={90} color="#3B82F6" />
          <RoundProgressBar skill="JavaScript" percentage={70} color="#F59E0B" />
          <RoundProgressBar skill="React" percentage={65} color="#10B981" />
          <RoundProgressBar skill="Python" percentage={60} color="#8B5CF6" />
          <RoundProgressBar skill="C" percentage={65} color="#F472B6" />
          <RoundProgressBar skill="C++" percentage={70} color="#6B7280" />
          <RoundProgressBar skill="MySQL" percentage={70} color="#3B82F6" />
        </div>
      </div>
    </section>
  );
}

const RoundProgressBar = ({ skill, percentage, color }) => {
  const strokeWidth = 24; 
  const radius = 50; 
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-full h-32">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="absolute top-0 left-0"
      >
        <circle
          stroke="#d2d6dc"
          fill="none"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="font-semibold">{skill}</div>
        <div className="text-gray-500">{percentage}%</div>
      </div>
    </div>
  );
}

export default Skills;
