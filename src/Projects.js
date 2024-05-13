import React, { useState } from 'react';
import projectImage1 from './images/shop.png';
import projectImage2 from './images/tribute.png';
import projectImage3 from './images/para.png';
import projectImage4 from './images/dash.png';
import projectImage5 from './images/resume.png';
import projectImage6 from './images/exp.png';
import projectImage7 from './images/redux.png';
import projectImage8 from './images/session.png';
import projectImage9 from './images/local.png';

const Projects = () => {
    const [showModal, setShowModal] = useState(null); 

    const toggleModal = (projectId) => {
        setShowModal(showModal === projectId ? null : projectId);
    };


    const projectsData = [
        { id: 1, title: "The Shopify Website using React", shortDescription: "The Shopify website, built using React.Users can explore a wide range of products and easily add items to their cart with just a click.", fullDescription: "The Shopify website, built using React, offers a seamless shopping experience with its intuitive user interface and robust functionality. Users can explore a wide range of products and easily add items to their cart with just a click. Upon clicking Add to Cart, the selected items are promptly added to the user's cart, allowing them to review their selections and proceed to checkout effortlessly. User can check the products by the category and continue the process.", imageUrl: projectImage1, projectUrl: "https://shopify-sample-seven.vercel.app/" },

        { id: 2, title: "Tribute to Mahatma Gandhi", shortDescription: "The Tribute to Mahatma Gandhi website, built using React, pays homage to one of the most iconic figures in modern history.", fullDescription: "The Tribute to Mahatma Gandhi website, built using React, pays homage to one of the most iconic figures in modern history. This website serves as a digital tribute, commemorating the life and legacy of Mahatma Gandhi, also known as the Father of the Nation in India. Through a thoughtfully crafted user interface and engaging content, visitors to the website can explore various aspects of Gandhi's life, including his philosophy of nonviolence, leadership in the Indian independence movement, and advocacy for social justice and equality. The website contains interactive images that provide a comprehensive understanding of Gandhi's principles and contributions to humanity.", imageUrl: projectImage2, projectUrl: "https://tribute-by-vinita.vercel.app/" },

        { id: 3, title: "Parallel-Wireless", shortDescription: "By replicating the Parallel Wireless website, I honed my skills in responsive design, usability, and user experience, ensuring that the clone delivers an immersive and seamless browsing experience across various devices. ", fullDescription: "The creation of a replica or clone of the Parallel Wireless website serves as a testament to my proficiency in web development and design. With meticulous attention to detail, I meticulously recreated the user interface, layout, and functionality of the original site, demonstrating my ability to understand and implement complex design patterns and interactive elements. This project allowed me to deepen my understanding of front-end technologies such as HTML, CSS, and JavaScript. By replicating the Parallel Wireless website, I honed my skills in responsive design, usability, and user experience, ensuring that the clone delivers an immersive and seamless browsing experience across various devices. ", imageUrl: projectImage3, projectUrl: "https://vinita-parallel-wireless.vercel.app/" },

        { id: 4, title: "Dashboard Using React", shortDescription: "The React-based dashboard I developed provides a comprehensive overview of product purchases and profits for electronic items.", fullDescription: "The React-based dashboard I developed provides a comprehensive overview of product purchases and profits for electronic items. Featuring intuitive visualizations like bar and pie charts, users can easily analyze data trends and make informed decisions. The bar chart offers insights into product purchases, illustrating the popularity of each electronic item. Meanwhile, the pie chart visualizes profit margins, allowing users to identify high-performing products at a glance. Additionally, the product page offers detailed information on each electronic item, empowering users to explore product specifications and make informed purchasing decisions. With its user-friendly interface and robust functionality, this dashboard serves as a valuable tool for businesses to optimize their electronic product offerings and maximize profits.", imageUrl: projectImage4, projectUrl: "https://dashboard-by-vinita.vercel.app/" },

        { id: 5, title: "Resume Builder using React", shortDescription: "The React-based Resume Builder project is a comprehensive tool designed to simplify the process of creating professional resumes.", fullDescription: "The React-based Resume Builder project is a comprehensive tool designed to simplify the process of creating professional resumes. Users can seamlessly input their personal information, including their name, profession, email, and phone number. With intuitive forms, users can then add their educational background, detailing their qualifications and achievements. The platform further allows users to craft the content of their resumes, including sections for skills, certificates. Once all details are entered, the Review page provides users with an overview of their resume, showcasing the entered data for a final check. Users can then download their completed resume as a PDF", imageUrl: projectImage5, projectUrl: "https://resume-builder-by-vinita.vercel.app/" },

        { id: 6, title: "The Expense Management using React", shortDescription: "The Expense Management is a React-based project that aims to simplify the process of tracking and managing expenses.", fullDescription: "The Expense Management is a React-based project that aims to simplify the process of tracking and managing expenses. With its intuitive user interface and robust functionality, this application allows users to effortlessly keep track of their spending habits, categorize expenses, and analyze their financial data. By providing features such as adding, editing, and deleting expenses, as well as generating insightful reports and visualizations, Expense Management empowers users to take control of their finances and make informed decisions. Whether it's for personal budgeting or business expense tracking, this project offers a reliable solution for effective expense management.", imageUrl: projectImage6, projectUrl: "https://expense-management-by-vinita.vercel.app/" },

        { id: 7, title: "The Grocery Store using React", shortDescription: "The Grocery Store project, developed using React, offers users a seamless shopping experience for a variety of fruits.", fullDescription: "The Grocery Store project, developed using React Redux, offers users a seamless shopping experience for a variety of fruits. With a user-friendly interface, customers can effortlessly browse through the selection of fruits and add their desired items to the virtual cart with a simple click. Once added, users have the flexibility to adjust the quantity of each item, with options to increment or decrement as needed. Additionally, the cart functionality allows users to conveniently remove items they no longer wish to purchase. As users add or remove items, the application dynamically updates to display the total price of the items in the cart, providing full transparency and clarity on the purchase.", imageUrl: projectImage7, projectUrl: "https://redux-toolkit-by-vinita.vercel.app/" },

        { id: 8, title: "Registration form using Session Storage", shortDescription: "The registration and login form project utilizes HTML, CSS, and JavaScript to provide users with a seamless authentication experience, using Session strorage", fullDescription: "The registration and login form project utilizes HTML, CSS, and JavaScript to provide users with a seamless authentication experience. Upon visiting the registration page, users are prompted to enter their name, email, mobile number, and password. This information is securely stored in the browser's session storage upon registration. After successful registration, users are directed to the login page, where they can enter their credentials to access the dashboard. The dashboard prominently displays the user's entered data in a structured table format, providing easy access to their registered information. This project not only demonstrates the fundamentals of user authentication but also showcases how session storage can be leveraged to create a personalized and interactive user experience.", imageUrl: projectImage8, projectUrl: "https://session-storage-by-vinita.vercel.app/" },

        { id: 9, title: "Registration form using Local Storage", shortDescription: " Utilizing local storage capabilities, user data is securely stored within the browser environment. Upon successful registration, users gain access to a login interface where they can securely authenticate themselves.", fullDescription: "The registration and login form is a comprehensive solution designed to streamline user authentication processes. Leveraging HTML, CSS, and JavaScript, this system empowers users to create accounts by providing vital information including name, email, mobile number, and password. Utilizing local storage capabilities, user data is securely stored within the browser environment. Upon successful registration, users gain access to a login interface where they can securely authenticate themselves. Once logged in, users are greeted with a visually appealing dashboard that neatly presents their submitted information in a structured table layout. This approach not only ensures data privacy but also provides users with a seamless and intuitive experience for managing their accounts.", imageUrl: projectImage9, projectUrl: "https://local-storage-by-vinita.vercel.app/" },
    ];

    return (
        <section id="projects" className="py-8 w-full">
            <div className="container mx-auto px-9">
                <h2 className="text-6xl text-center font-bold mb-4">Projects</h2><br></br>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map(project => (
                        <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                <div className="relative group">
                                    <img className="w-full h-40 object-cover transition duration-300 transform group-hover:scale-110" src={project.imageUrl} alt={project.title} />
                                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    </div>
                                </div>
                            </a>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-700">{project.shortDescription}</p>
                                <a href="#" className="block mt-4 text-blue-700 text-xl font-bold hover:nounderline" onClick={() => toggleModal(project.id)}>Read more</a>
                                {showModal === project.id && (
                                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                                        <div className="bg-white p-8 rounded-lg w-96">
                                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                            <p className="text-gray-700">{project.fullDescription}</p>
                                            <button onClick={() => toggleModal(project.id)} className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none">Close</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
