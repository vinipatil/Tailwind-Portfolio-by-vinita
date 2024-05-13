import React from 'react';
import './styles.css';
import Lottie from 'react-lottie'; 
import animationData from './ssc.json'; 
import animationData2 from './hsc.json'; 
import animationData3 from './dip.json'; 
import animationData4 from './deg.json'; 

const Education = () => {

  return (
    <section id="education" className="py-8 bg-gray-100 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-center font-bold mb-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="education-card animate__animated animate__fadeInTopLeft flex items-center">
            <div className="bg-white rounded-md shadow-md p-6 bg-gradient-to-r from-blue-300 to-blue-500 w-full">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-4xl font-semibold mb-2">SSC</h3>
                  <p className="text-2xl mb-2">University: <span className="font-semibold">Secondary School & Jr. college, Bhilawadi</span></p>
                  <p className="text-2xl">Percentage: <span className="font-semibold">84.40%</span></p>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Lottie options={{ animationData: animationData }} height={250} width={250} />
                </div>
              </div>
            </div>
          </div>
          <div className="education-card animate__animated animate__fadeInTopRight flex items-center">
            <div className="bg-white rounded-md shadow-md p-6 bg-gradient-to-r from-green-300 to-green-500 w-full">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-4xl font-semibold mb-2">HSC</h3>
                  <p className="text-2xl mb-2">University: <span className="font-semibold">Secondary School & Jr. college, Bhilawadi</span></p>
                  <p className="text-2xl">Percentage: <span className="font-semibold">55.56%</span></p>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Lottie options={{ animationData: animationData2 }} height={250} width={250} />
                </div>
              </div>
            </div>
          </div>
          <div className="education-card animate__animated animate__fadeInBottomLeft flex items-center">
            <div className="bg-white rounded-md shadow-md p-6 bg-gradient-to-r from-yellow-300 to-yellow-500 w-full">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-4xl font-semibold mb-2">Diploma</h3>
                  <p className="text-2xl mb-2">University: <span className="font-semibold">PVPIT, Budhgaon</span></p>
                  <p className="text-2xl">Percentage: <span className="font-semibold">89.88</span></p>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Lottie options={{ animationData: animationData3 }} height={250} width={250} />
                </div>
              </div>
            </div>
          </div>
          <div className="education-card animate__animated animate__fadeInBottomRight flex items-center">
            <div className="bg-white rounded-md shadow-md p-6 bg-gradient-to-r from-pink-300 to-pink-500 w-full">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-4xl font-semibold mb-2">Degree</h3>
                  <p className="text-2xl mb-2">University: <span className="font-semibold">Nanasaheb Mahadik College of Engineering, Peth</span></p>
                  <p className="text-2xl">Percentage: <span className="font-semibold">8.03 (7th semester pointer)</span></p>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Lottie options={{ animationData: animationData4 }} height={250} width={250} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
