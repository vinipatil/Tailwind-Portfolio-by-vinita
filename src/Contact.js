import React from 'react';
import Lottie from 'react-lottie';
import animationData from './cont.json'; 


const Contact = () => {
  return (
    <section id="contact" className="py-8 bg-red-400 w-full">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 lg:mr-4 mt-10">
          <div className="bg-white rounded-md shadow-md p-6 ml-10">
            <h2 className="text-4xl font-bold mb-4  text-center">Contact</h2>
            <form className="max-w-md mx-auto lg:max-w-none">
              <div className="mb-4">
                <label htmlFor="name" className="text-xl block font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-xl block font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="text-xl block font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Send Message</button>
            </form>
          </div>
        </div>
        <div className="lg:block lg:w-1/2 lg:mt-0">
          <div className="w-full rounded-md animate-float">
            <Lottie options={{ animationData: animationData }} height={600} width={600} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;