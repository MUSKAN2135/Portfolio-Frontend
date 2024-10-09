import Navbar from '../components/navbar/navbar'
import ME from '../images/me.png'
import './data.css'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Type } from '../components/typejs/type';
import { CircularCounter } from '../components/progressbr/circlecounter';
import { NumberCard } from '../components/numbercards/numbrcard';
import { Footer } from '../components/footer/footer';
import { Col, Container, Row } from 'react-bootstrap';
import Resume from '../components/resumesection/resume';
import { Gallery } from '../components/portfolio/gallery';

export default function Data() {
  return (
    <div className='overflow-hidden'>
      <div>
        <Navbar />
      </div>
      <section id='home' className='portfo px-3'>
        <div className='gradient-bottom'>
        </div>
        <Container>
          <Row className='new-section align-items-center'>
            <Col md={6}>
              <img src={ME} alt='' className='img-fluid w-auto' data-aos="fade-up" />
            </Col>
            <Col md={6} className='type text-container'>
              <Type />
            </Col>
          </Row>
        </Container>
        <div className='leftbar '>
          <div className="vertical-text">
            <p>Follow Me</p>
          </div>
          <div className="social-icons">
            <a href='https://www.facebook.com'><FaFacebook className='fa-icon' /></a>
            <a href='https://www.linkedin.com'><FaLinkedin className='fa-icon' /></a>
            <a href='https://www.instagram.com'><FaInstagram className='fa-icon' /></a>
          </div>
        </div>
      </section>
      <section id='aboutme' className='section2'>
        <div className='container w-75 about-me d-flex flex-column align-items-center text-center pt-5 px-2 pb-3' data-aos="fade-up">
          <h2>About Me</h2>
          <hr className='hr-line'></hr>
          <p className=''>I am a dynamic web developer, weaving digital magic with a blend of creativity and technical prowess. Proficient in HTML, CSS, JavaScript, React.js and Node.js I craft visually stunning and user-friendly websites. With a passion for staying at the forefront of industry trends, I bring innovative solutions to every project. My mission is to transform visions into captivating online experiences, ensuring a standout presence in the digital realm..</p>
        </div>
        <div className="container text-center px-0">
          <div className='row section3 pt-5'>
            <div className='col-lg-3 col-md-4'>
              <CircularCounter Percentage={90} />
              <h6 className='fs-5 d-flex justify-content-center'>Interpersonal Skills</h6></div>
            <div className='col-lg-3 col-md-4'>
              <CircularCounter Percentage={85} />
              <h6 className='fs-5 d-flex justify-content-center'>Accuracy</h6></div>
            <div className='col-lg-3 col-md-4'>
              <CircularCounter Percentage={70} />
              <h6 className='fs-5 d-flex justify-content-center'>Development Skills</h6></div>
            <div className='col-lg-3 col-md-4'>
              <CircularCounter Percentage={90} />
              <h6 className='fs-5 d-flex justify-content-center'>Business Skills</h6></div>
          </div>
        </div>
      </section>
      <section id='whatido' className='section4'>
        <div className='container about-me d-flex flex-column align-items-center text-center py-5 w-50' data-aos="fade-up">
          <h3>What i Do</h3>
          <hr className='hr-line'></hr>
        </div>
        <div className="container">
          <div className='row px-2'>
            <div className='col-lg-4 col-md-5 d-flex justify-content-center'>
              <NumberCard first='1' second='Frontend Wizard' third='I specialize in crafting captivating user interfaces using cutting-edge technologies like HTML, CSS, Bootstrap and JavaScript. My focus is on creating visually appealing web experiences that leave a lasting impression.' />
            </div>
            <div className='col-lg-4 col-md-5 d-flex justify-content-center'>
              <NumberCard first='2' second='MERN Maestro' third='Proficient in MongoDB, Express.js, React.js, and Node.js, I excel in developing full-stack applications. From database management to dynamic frontend design, I bring a comprehensive skill set to every project.' />
            </div>
            <div className='col-lg-4 col-md-5 d-flex justify-content-center'>
              <NumberCard first='3' second='Continuous Learner & Innovator' third='In the ever-evolving landscape of web development, I am committed to staying ahead. I avidly explore new technologies and trends, integrating innovative solutions to create dynamic and future-proof websites.' />
            </div>
            <div className='col-lg-4 col-md-5 d-flex justify-content-center'>
              <NumberCard first='4' second='Problem Solver Extraordinaire' third='I thrive on solving complex coding challenges and turning them into elegant solutions. My analytical mindset and attention to detail ensure the delivery of high-quality and efficient code.' />
            </div>
            <div className='col-lg-4 col-md-5 d-flex justify-content-center'>
              <NumberCard first='5' second='Version Control Enthausiast' third='Proficient in utilizing Git for version control, I ensure a streamlined and collaborative development process. Tracking changes and managing code repositories are essential aspects I handle seamlessly.' />
            </div>
            <div className='col-lg-4 col-md-5 d-flex justify-content-center'>
              <NumberCard first='6' second='Holistic Freelancer' third="Also as a dynamic freelancer, I seamlessly blend my web development expertise with strong business acumen. This unique combination allows me to not only deliver technically sound projects but also contribute strategic insights that align with client's business goals" />
            </div>
          </div>
        </div>
      </section>
      <section className='section5 d-flex justify-content-center '>
        <div className='top'>
        </div>
        <div className='container quotes text-align-center w-50'>
          <b>&rdquo;</b>
          <p>Architects of the online realm sculpt seamless marvels, painting stories in pixels. Experience the extraordinary as technology dances with artistry, inviting all to a realm where innovation speaks and magic unfolds.</p>
        </div>
        <div className='gradient-bottom'>
        </div>
      </section>
      <section id='portfolio' className='section6 d-flex flex-column justify-content-center align-items-center'>
        <div className='about-me d-flex flex-column align-items-center text-center pb-3 w-50' data-aos="fade-up">
          <h2>Portfolio</h2>
          <hr className='hr-line'></hr>
        </div>
        <Gallery />
      </section>
      {/* my resume */}
      <section id='myResume' className='container px-5'>
        <div className='container about-me d-flex flex-column align-items-center text-center pt-5 w-50' data-aos="fade-up">
          <h2>Resume</h2>
          <hr className='hr-line'></hr>
        </div>
        <div className="px-5 py-3" data-aos="fade-up">
          <div className='row'>
            <div className='col-lg-6 col-md-7'>
              <h2 className='py-3'>Experience</h2>
              <Resume first='1' second='03/2024 - Present' third='Full Stack Developer' fourth='Heapware' fifth='I actively contribute to the development and enhancement of web applications. My responsibilities involve coding and implementing innovative features. This internship has provided me with valuable hands-on experience.' />
              <Resume first='2' second='06/2023 - 02/2024' third='MERN stack developer' fourth='IDEO College of Technology' fifth='During my tenure as a MERN Stack Developer intern at Ideo College, I honed my skills in designing scalable web applications. I actively contributed to the development of cutting-edge projects, gaining experience in MERN technologies.' />
              <Resume first='3' second='10/2020 - 01/2021' third='Freelancing' fourth='DigiSkills' fifth='I acquired freelancing skills through Digiskills, marking a pivotal step in my professional journey. The natural progression of my abilities and the self-sufficiency have empowered me to thrive as a freelancer. ' />
            </div>
            <div className='col-lg-6 col-md-7'>
              <h2 className='py-3'>Education</h2>
              <Resume first='1' second='08/2018 - 06/2022' third='BS Information Technology' fourth='Lahore Leads University' fifth='I completed my BSIT degree from Lahore Leads University, where I gained a solid understanding of Information Technology. This experience fueled my interest in creative problem-solving, laying the groundwork for my professional journey.' />
              <Resume first='2' second='08/2016 - 09/2018' third='ICS' fourth='Punjab Group of Colleges' fifth='I pursued my Intermediate studies with a focus on ICS, delving into the dynamic world of computer science. This academic journey equipped me with a solid foundation and interactive learning experiences, fostering a passion for technology.' />
              <Resume first='3' second='2016' third='Matric' fourth='Science' fifth='I hold a Matriculation degree with a focus on Science, reflecting my enthusiasm for exploring the interactive and dynamic world of scientific principles. ' />
            </div>
          </div>
        </div>
      </section>
      <section id="contactme" className='my-footer'>
        <Footer />
      {/* <Signup /> */}
      </section>
    </div>
  );
};