import React from 'react';
import './home.css';
import profile from '../components/images/profile.jpg'; //Import the image file
import react from '../components/images/react.png'; 
import python from '../components/images/python.png'; 
import C from '../components/images/c++.png'; 
import javascript from '../components/images/javascript.png'; 
import postgresql from '../components/images/postgresql.png'; 
import linux from '../components/images/linux.png'; 

import world from '../components/images/word-image-1.jpeg'; 
import Dental from '../components/images/TO Dental.jpg'; 
import Robot from '../components/images/Robo.jpg'; 
import PetStore from '../components/images/Pet Paradise.jpg'; 
// Video link
import ToDental from '../components/video/video.mp4'; //Import the video file

function Home () {
    return(
      <>
{/* home section */}
  {/* <h3 className="text-center mt-40">Hi There. I'm Guram.</h3>
  <h3 className="text-center m-4">I am a Full Stack Developer </h3><br/> */}
  <section className="portfolio" id="home">
      <div className="home-container  mt-40">
        <div className="photo-column col-lg-6">
          <div className="row">
            <div className="col">
              <img src={react} alt="react" className="img-fluid rounded" />
            </div>
            <div className="col">
              <img src={python} alt="python" className="img-fluid rounded" />
            </div>
            <div className="col">
              <img src={C} alt="C" className="img-fluid rounded" />
            </div>
            <div className="col">
              <img src={javascript} alt="javascript" className="img-fluid rounded" />
            </div>
            <div className="col">
              <img src={postgresql} alt="postgresql" className="img-fluid rounded" />
            </div>
            <div className="col">
              <img src={linux} alt="linux" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>

{/* about me section  */}
<section className="portfolio" id="about me">
    <br/><h3 id="about" className="text-center m-4"><strong>About Me</strong></h3><br/>
    <div className="container1">
      <div className="row">
        <div className="photo-column col-lg-3 col-sm-12">
           <img src={profile} alt="profile" className="img-fluid rounded"/>
        </div>

        <div className="paragraph-column col-lg-6">
          <h4 className="text-center m-5">Dynamic Full-Stack Developer Fueled by Creativity and Problem-Solving</h4>
         <p className="mt-2">I am a recent computer science graduate with a passion for full-stack development. 
         Throughout my academic journey, I have acquired a solid foundation in various programming languages, 
         including React.js, Python, C++, and JavaScript. I enjoy tackling complex problems and finding innovative 
         solutions that enhance user experiences. With a strong understanding of software development principles 
         and a keen eye for detail, I strive to deliver high-quality projects that meet both functional and aesthetic 
         requirements. As a versatile developer, I am constantly seeking opportunities to expand my skill set and stay 
         updated with the latest technologies and industry trends. My dedication, curiosity, and enthusiasm for learning 
         enable me to adapt quickly to new challenges and contribute effectively to collaborative projects.
         I am excited to leverage my technical expertise and creativity to bring innovative ideas to life and 
         make a meaningful impact in the field of software development.
         </p>
        </div>
      </div>  
    </div> 
</section>


{/* Display your technical projects here */}
{/* Example project 1 */}
{/* id connects to link and selects/hovers */}
<section className="portfolio" id="projects"> 
      <h2 className="text-center m-5"><strong>Technical Projects</strong></h2>

  <div className="portfolio-container">
        {/* Add more portfolio boxes as needed */}
        <div className="row justify-content-center">

        <div className="col-lg-4 col-sm-8 my-3 mx-4">
        <div className="portfolio-box">
          <img src={Dental} alt="To Dental Web" />
          <div className="portfolio-layer">
            <h4 className="m-2">T | O Dental</h4>
            <p>Dental web app using React.JS, Bootstrap,
               node.js, express.js, nodemailer, cors, axios, nodemon, and MySQL 
               workbench.</p>
              <div className="btn-group" role="group" aria-label='Basic example'>
                <button type="button" className="btn btn-secondary" 
                  onClick={() => window.open("https://github.com/CS-Guram/TO-Dental", "_blank")}>Repo</button>
                <button type="button" className="btn btn-secondary" 
                  onClick={() => window.open(ToDental, '_blank', 'noopener noreferrer')}>Video
                </button>
              </div>
            </div>
            </div>
            </div>
      
        {/* Add more portfolio boxes as needed 2*/}
        <div className="col-lg-4 col-sm-8 my-3 mx-4">
        <div className="portfolio-box">
          <img src={PetStore} alt="" />
          <div className="portfolio-layer">
            <h4 className="m-2">Pet Paradise</h4>
            <p>The web app for a pet store is built using HTML, PHP, SQL, and the Apache
               web server. Users can open an account, browse and purchase pet food items,
               and find information about pet healthcare.</p>
           <div className="btn-group" role="group" aria-label='Basic example' >
            <button type="button"  className="btn btn-secondary" >Repo</button>
            <button type="button" className="btn btn-secondary" >Video</button>
          </div>
        </div>
        </div>
        </div>

        {/* Add more portfolio boxes as needed 3*/}
        <div className="col-lg-4 col-sm-8 my-3 mx-4">
        <div className="portfolio-box">
          <img src={Robot} alt="" />
          <div className="portfolio-layer">
            <h4 className="m-2">Robo Game</h4>
            <p>2D Robo shooter created with the Unity engine, and it includes various features like a physics engine, collision detection, and animation.</p>
           <div className="btn-group" role="group" aria-label='Basic example' >
            <button type="button"  className="btn btn-secondary" 
                 onClick={() => window.open("https://github.com/CS-Guram/Robo-Game", '_blank', 'noopener noreferrer')}>Repo</button>
            <button type="button" className="btn btn-secondary"   
                onClick={() => window.open("https://gutara.itch.io/robo", '_blank', 'noopener noreferrer')}> Live 
            </button>
          </div>
        </div>
        </div>
        </div>

        {/* Add more portfolio boxes as needed 4*/}
        <div className="col-lg-4 col-sm-8 my-3 mx-4">
        <div className="portfolio-box">
          <img src={world} alt="To Dental Web" />
          <div className="portfolio-layer">
            <h4 className="m-2">T | O Dental</h4>
            <p>The web app dental service is built using React.JS, Bootstrap,
               node.js, express.js, nodemailer, cors, axios, nodemon, and MySQL 
               workbench. Patients can open accounts to access their procedure history,
               insurance forms, and service information..</p>
              <div className="btn-group" role="group" aria-label='Basic example'>
                <button type="button" className="btn btn-secondary" 
                  onClick={() => window.open("https://github.com/CS-Guram/TO-Dental", "_blank")}>Repo</button>
                <button type="button" className="btn btn-secondary" 
                  onClick={() => window.open(ToDental, '_blank', 'noopener noreferrer')}>Video
                </button>
              </div>
            </div>
            </div>
            </div>
      
        {/* Add more portfolio boxes as needed 5*/}
        <div className="col-lg-4 col-sm-8 my-3 mx-4">
        <div className="portfolio-box">
          <img src={world} alt="" />
          <div className="portfolio-layer">
            <h4 className="m-2">Pet Paradise</h4>
            <p>The web app for a pet store is built using HTML, PHP, SQL, and the Apache
               web server. Users can open an account, browse and purchase pet food items,
               and find information about pet healthcare.</p>
           <div className="btn-group" role="group" aria-label='Basic example' >
            <button type="button"  className="btn btn-secondary" >Repo</button>
            <button type="button" className="btn btn-secondary" >Video</button>
          </div>
        </div>
        </div>
        </div>

        {/* Add more portfolio boxes as needed 6*/}
        <div className="col-lg-4 col-sm-8 my-3 mx-4">
        <div className="portfolio-box">
          <img src={world} alt="" />
          <div className="portfolio-layer">
            <h4 className="m-1">Robo Game</h4>
            <p>An anime streaming service made with React.JS User can search and watch the anme without ad.</p>
           <div className="btn-group" role="group" aria-label='Basic example' >
            <button type="button"  className="btn btn-secondary" 
                 onClick={() => window.open("https://github.com/CS-Guram/Robo-Game", '_blank', 'noopener noreferrer')}>Repo</button>
            <button type="button" className="btn btn-secondary"   
                onClick={() => window.open("https://gutara.itch.io/robo", '_blank', 'noopener noreferrer')}> Live 
            </button>
          </div>
        </div>
        </div>
        </div>




   
    </div>
  </div>
  </section>


  
  {/* Contact section */}
  <section className="portfolio" id="contact">
      <h3 className="text-center m-4"><strong>GET IN TOUCH</strong></h3>
  </section>


</>
);
}

export default Home;