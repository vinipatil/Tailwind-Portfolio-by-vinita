import React from 'react';

const Education = () => {

  return (
    <section id="education" className="py-8 bg-gray-100 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-center font-bold mb-4">Education</h2><br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-md shadow-md p-6 bg-gradient-to-r from-blue-300 to-blue-500">
            <h3 className="text-4xl font-semibold mb-2">10th</h3><br></br>
            <p className="text-2xl mb-2">University: <span className="font-semibold">Secondary School & Jr. college, Bhilawadi</span></p>
            <p className="text-2xl">Percentage: <span className="font-semibold">84.40%</span></p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6 bg-gradient-to-r from-green-300 to-green-500">
            <h3 className="text-4xl font-semibold mb-2">12th</h3><br></br>
            <p className="text-2xl mb-2">University: <span className="font-semibold">Secondary School & Jr. college, Bhilawadi</span></p>
            <p className="text-2xl">Percentage: <span className="font-semibold">55.56%</span></p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6 bg-gradient-to-r from-yellow-300 to-yellow-500">
            <h3 className="text-4xl font-semibold mb-2">Diploma</h3><br></br>
            <p className="text-2xl mb-2">University: <span className="font-semibold">PVPIT, Budhgaon</span></p>
            <p className="text-2xl">Percentage: <span className="font-semibold">89.88</span></p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6 bg-gradient-to-r from-pink-300 to-pink-500">
            <h3 className="text-4xl font-semibold mb-2">Degree</h3><br></br>
            <p className="text-2xl mb-2">University: <span className="font-semibold">Nanasaheb Mahadik College of Engineering, Peth</span></p>
            <p className="text-2xl">Percentage: <span className="font-semibold">8.03 (7th semester pointer)</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
