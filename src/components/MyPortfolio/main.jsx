import React from 'react';
import { Footer } from '../footer/footer';
import Resume from '../resumesection/resume';
import Navbar from '../navbar/navbar';
import laptop from '../images/2section.avif'
import './main.css'
import { Type } from '../typejs/type';
import { Gallery } from '../portfoliogallery/gallery';
import { NumberCard } from '../numbercards/numbrcard';


export default function Main() {
  return (
    <div className='complete overflow-hidden'>
      {/* hero section */}
      <section id='home' className="text-gray-400 body-font main">
        <Navbar />
        <div className="w-full h-full pb-24 flex flex-col justify-center items-center md:items-start md:text-left text-center">
          <Type />
        </div>
      </section>
      <section id="whatido" className="py-8">
        <div className="container mx-auto text-center py-5">
          <h3 className="text-3xl text-light">What I Do</h3>
          <hr className="w-24 my-3 border-yellow-500 mx-auto" />
        </div>
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:justify-center">
            <div className="flex justify-center lg:w-3/2 mb-4 lg:mb-0 mx-4">
              <img src={laptop} alt="" className="w-full h-full md:px-4 lg:px-8 my-8" />
            </div>
            <div className="lg:w-1/2 grid lg:grid-cols-2 md:grid-cols-2 gap-0 lg:px-0">
              <div>
                <NumberCard
                  first="Frontend Wizard"
                  second="I specialize in crafting captivating user interfaces using cutting-edge technologies like HTML, CSS, Bootstrap, JavaScript and its frameworks and libraries and different tools."
                />
              </div>
              <div>
                <NumberCard
                  first="MERN Maestro"
                  second="Proficient in MongoDB, Express.js, React.js, and Node.js, I excel in developing full-stack applications. From database management to dynamic frontend design, I bring a comprehensive skill set to every project."
                />
              </div>
              <div>
                <NumberCard
                  first="Version Control Enthusiast"
                  second="Proficient in utilizing Git for version control, I ensure a streamlined and collaborative development process. Tracking changes and managing code repositories are essential aspects I handle seamlessly."
                />
              </div>
              <div>
                <NumberCard
                  first="Holistic Freelancer"
                  second="As a dynamic freelancer, I blend my web development expertise with business acumen to deliver projects aligned with client's goals."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex justify-center items-center relative my-4'>
        <div className='flex justify-center items-center w-full bg-yellow-500 relative py-32'>
        </div>
        <div className='square flex justify-center items-center absolute left-0 right-0 z-[1] bg-blue-900 py-24 before:text-4xl before:font-bold text-white pl-4'>
          <p className='lg:w-1/3 w-full text-white'>Architects of the online realm sculpt seamless marvels, painting stories in pixels. Experience the extraordinary as technology dances with artistry, inviting all to a realm where innovation speaks and magic unfolds.</p>
        </div>
      </section>
      <section id='portfolio' className='flex flex-col justify-center items-center my-10'>
        <div className='flex flex-col items-center text-center w-1/2' data-aos="fade-up">
          <h2 className='text-3xl font-light'>Portfolio</h2>
          <hr className="w-24 my-3 border-yellow-500 mx-auto" />
        </div>
        <Gallery />
      </section>
      <section id="myResume" className="mx-auto mt-3 sm:px-14 md:px-8 mb-5">
        <div
          className="flex flex-col items-center text-center px-5 w-full md:w-1/2 mx-auto"
          data-aos="fade-up">
          <h2 className="text-2xl font-light">Resume</h2>
          <hr className="w-24 my-3 border-yellow-500 mx-auto" />
        </div>
        <div className="p-10" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 space-x-l-8">
            <div>
              <h2 className="p-6 text-2xl font-normal">Experience</h2>
              <Resume
                first="1"
                second="03/2024  Present"
                third="Full Stack Developer"
                fourth="Heapware"
                fifth="I actively contribute to the development and enhancement of web applications. My responsibilities involve implementing innovative features."
              />
              <Resume
                first="2"
                second="06/2023  02/2024"
                third="MERN stack developer"
                fourth="IDEO College of Technology"
                fifth="During my tenure as a MERN Stack Developer intern at Ideo College, I honed my skills in designing scalable web applications."
              />
              <Resume
                first="3"
                second="10/2020  01/2021"
                third="Freelancing"
                fourth="DigiSkills"
                fifth="I acquired freelancing skills through Digiskills, marking a pivotal step in my professional journey. The natural progression of my abilities."
              />
            </div>
            <div>
              <h2 className="p-6 text-2xl font-normal">Education</h2>
              <Resume
                first="1"
                second="08/2018  06/2022"
                third="BS Information Technology"
                fourth="Lahore Leads University"
                fifth="I completed my BSIT degree from Lahore Leads University, where I gained a solid understanding of Information Technology. This experience fueled my interest in creative problem-solving."
              />
              <Resume
                first="2"
                second="08/2016  09/2018"
                third="ICS"
                fourth="Punjab Group of Colleges"
                fifth="I pursued my Intermediate studies with a focus on ICS, delving into the dynamic world of computer science. This academic journey equipped me with a solid foundation."
              />
              <Resume
                first="3"
                second="08/2016"
                third="Matric"
                fourth="Science"
                fifth="I hold a Matriculation degree with a focus on Science, reflecting my enthusiasm for exploring the interactive and dynamic world of scientific principles."
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contactme" className='my-footer'>
        <Footer />
      </section>
    </div>
  );
}