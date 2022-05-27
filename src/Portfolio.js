
import './assets/css/App.css';
import './assets/css/bootstrap.min.css'
import ProfilePic from './assets/images/profilepic.jpg'
import CampusCantina from './assets/images/campus_cantina.png'
import Kusinanichichi from './assets/images/kusinanichichi.png'
import Hercules from './assets/images/hercules.png'
import RainbowReef from './assets/images/rainbowreef_game.png'
import Calculator from './assets/images/calculator.png'
import Github from './assets/images/github-icon.png'
import React from "./assets/images/react.svg";
import Javascript from "./assets/images/js.png"
import HTML from "./assets/images/html.png"
import CSS from "./assets/images/css.png"
import Bootstrap from "./assets/images/bootstrap.png"
import Java from "./assets/images/java.png"
import MySQL from "./assets/images/mysql.png"
import NodeJS from "./assets/images/nodejs.png"
import Atom from "./assets/images/atom.png"


const Portfolio = () => {

  return (
    <div className="page container-fluid">
      <nav className="nav_bg navbar fixed-top navbar-expand-lg py-4">
        <a class="navbar-brand font-weight-bold pl-4 nav_text" href="#"><span className="h4 border rounded border-left-0 border-right-0">HZ</span></a>
        <ul className="navbar-nav ml-auto d-flex flex-row">
          <li className="nav-item px-2">
            <a className="nav-link nav_text" href="#">Home</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link nav_text" href="#aboutme">About Me</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link nav_text" href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      {/* Introduction */}
      <div className="container text-center introduction_section">
        <div className="introduction_1 h6 pb-3">Hello! My name is</div>
        <div className="introduction_2 h2 pb-3 font-weight-bold">Henzon Zambrano</div>
        <div className="secondary_color3 text-wrap mx-auto" style={{ width: '14rem' }}>I'm a recent Computer Engineer graduate (2021) with a deep interest and passion
          for software engineering.
          Currently, I'm seeking for Software Engineering opportunities.
        </div>
      </div>
      <hr className="position-fixed left_line" />

      <div className="social_logo position-fixed">
        <a href="https://www.linkedin.com/in/henzon-zambrano-06b116105/" className="fa contacts fa-linkedin fa-lg text-decoration-none" target="_blank"></a>
        <a href="https://github.com/henzonz" className="fa contacts fa-github fa-lg text-decoration-none" target="_blank"></a>
      </div>
      {/* profile card */}
      <div className="profile container" id="aboutme">
        {/* About Me */}
        <div className="text-center h2 pb-5 text_maroon font-bold">
          <hr className="float-left w-25" />About Me<hr className="float-right w-25" />
        </div>
        <div className="row">
          <div className="col text-center">
            <img className="profile_pic_animation shadow-lg rounded-circle profile_pic" src={ProfilePic} style={{ height: '290px', width: '215px' }}>
            </img>
          </div>
          <div className="col">
            <div className="secondary_color3">Welcome! My name is Henzon (hen-zen) and I'm a Computer Engineer graduate (2021) from SFSU.
              I enjoy solving problems and formulating solutions that are both efficient and scalable. I also love being able to bring website designs I have in mind to life digitally.
              Currently, I build websites as side projects to continue exploring other frameworks, software architecture designs and software design practices. </div>
          </div>
        </div>


      </div>
      {/* right side email address */}
      <div className="email position-fixed rounded p-1"><a className="badge email_text" href="mailto:henzon.zno26@gmail.com"> henzon.zno26@gmail.com </a>
      </div>


      {/* Skillset */}
      <div className="p-3 container text_maroon mt-5">
        <div className="text-center h2"><hr className="float-left w-25" />Skillset<hr className="float-right w-25" /></div>
        <div className="text-center skillset-text">
          <span><span className="h5">Main Skills:</span> <br /> <span className="font-weight-bold text_gray">Java, HTML, CSS, Bootstrap, Javascript, React</span></span>
          <br />
          <br />
          <span><span className="h5">Secondary Skills:</span> <br /> <span className="font-weight-bold text_gray">Node.js, Express.js, MySQL, Axios, Github</span> </span>
        </div>
        <br />
        <ul className="main-circle mx-auto">
          <li className="orbiting-icons"><img className="img-orbit shadow-lg" src={Javascript} style={{ height: '30px', width: '30px' }} /></li>
          <li className="orbiting-icons"><img className="img-orbit shadow-lg" src={HTML} style={{ height: '30px', width: '30px' }} /></li>
          <li className="orbiting-icons"><img className="img-orbit shadow-lg" src={CSS} style={{ height: '30px', width: '30px' }} /></li>
          <li className="orbiting-icons"><img className="img-orbit shadow-lg" src={Bootstrap} style={{ height: '30px', width: '30px' }} /></li>
          <li className="orbiting-icons"><img className="img-orbit shadow-lg" src={Java} style={{ height: '30px', width: '30px' }} /></li>
          <li className="orbiting-icons"><img className="img-orbit shadow-lg" src={NodeJS} style={{ height: '30px', width: '30px' }} /></li>
          <li className="orbiting-icons"><img className="img-orbit shadow-lg" src={MySQL} style={{ height: '30px', width: '30px' }} /></li>
          <li className="orbiting-icons"><img className="img-orbit shadow-lg" src={Atom} style={{ height: '30px', width: '30px' }} /></li>
        </ul>
      </div>

      {/* Projects */}
      <div className="h2 text-center text_maroon container">
        <hr className="float-left w-25" /> Projects<hr className="float-right w-25" />
      </div>
      <div id="projects" className="container p-3">

        <div className="row p-5">
          <div className="col1 col text-center order-last border-0 rounded">
            <img className="project_img shadow-lg img-fluid rounded project-border" src={Kusinanichichi} style={{ height: '250px', width: '450px' }} />
          </div>
          <div className="col align-self-center right_margin hide_text">
            <div className="col2_rmargin text-light text-center p-1 rounded">
              <div className="h4"> <a className="nounderline_link text-light" target="_blank" href="https://www.kusinanichichi.com/">Kusinanichichi</a> <a href="https://github.com/henzonz/Kusinanichichi" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <div className="project_text">A React full-stack website for a restaurant that uses Javascript, HTML and CSS with Bootstrap for frontend.
                REST backend utilizes Node.js, Express.js and MySQL. The project is deployed using Heroku and Netlify.
              </div>
            </div>
            <div className="project_tags d-inline-flex justify-content-around float-left font-italic">
              <div className="pr-1 lgscreen-project__tagtexts">React</div>
              <div className="pr-1 lgscreen-project__tagtexts">HTML</div>
              <div className="pr-1 lgscreen-project__tagtexts">CSS</div>
              <div className="pr-1 lgscreen-project__tagtexts">MySQL</div>
              <div className="pr-1 lgscreen-project__tagtexts">Node.js</div>
              <div className="pr-1 lgscreen-project__tagtexts">Javascript</div>
              <div className="pr-1 lgscreen-project__tagtexts">Express.js</div>
              <div className="pr-1 lgscreen-project__tagtexts">Axios</div>
              <div className="pr-1 lgscreen-project__tagtexts">Netlify</div>
              <div className="pr-1 lgscreen-project__tagtexts">Heroku</div>
            </div>
          </div>
          <div className="col align-self-center right_margin right_margin2">
            <div className="col2_rmargin text-light text-center p-1">
              <div className="h4"> <a className="nounderline_link text-light" target="_blank" href="https://www.kusinanichichi.com/">Kusinanichichi</a> <a href="https://github.com/henzonz/Hercules-copy" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <div className="project_text">A React full-stack website for a restaurant that uses Javascript, HTML and CSS with Bootstrap for frontend.
                REST backend utilizes Node.js, Express.js and MySQL. The project is deployed using Heroku and Netlify.
              </div>
            </div>
            <div className="project_tags d-inline-flex justify-content-around float-left font-italic text-muted">
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">React</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">HTML</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">CSS</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">MySQL</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">Node.js</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">Javascript</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">Express.js</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">Axios</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">Netlify</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">Heroku</div>
            </div>
          </div>
        </div>

        <div className="row p-5">
          <div className="col1 col text-center border-0 rounded">
            <img className="project_img shadow-lg img-fluid rounded project-border" src={CampusCantina} style={{ height: '250px', width: '450px' }} />
          </div>
          <div className="col-6 col-lg align-self-center pt-2 left_margin hide_text">
            <div className="col2_lmargin text-light text-center p-1 rounded">
              <div className="h4"> <a className="nounderline_link text-light" target="_blank" href="https://campuscantina.com/">Campus Cantina</a> <a href="https://github.com/henzonz/CampusCantina-copy" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <div className="project_text">Developed an eCommerce website within a SCRUM team of six people as a frontend member.
                Frontend designed and built using Javascript, HTML and CSS with Bootstrap.
                REST backend was created using Javascript, Node.js, Express.js, Redux and MySQL.
                Website is hosted using AWS EC2.
              </div>
            </div>

            <div className="project_tags d-inline-flex justify-content-around float-right font-italic">
              <div className="pr-1 lgscreen-project__tagtexts">HTML</div>
              <div className="pr-1 lgscreen-project__tagtexts">CSS</div>
              <div className="pr-1 lgscreen-project__tagtexts">Bootstrap</div>
              <div className="pr-1 lgscreen-project__tagtexts">MySQL</div>
              <div className="pr-1 lgscreen-project__tagtexts">Javascript</div>
              <div className="pr-1 lgscreen-project__tagtexts">Redux</div>
              <div className="pr-1 lgscreen-project__tagtexts">React</div>
              <div className="pr-1 lgscreen-project__tagtexts">Figma</div>
            </div>
          </div>
          <div className="col align-self-center pt-2 left_margin left_margin2">
            <div className="col2_lmargin text-light text-center p-1">
              <div className="h4"> <a className="nounderline_link text-light" target="_blank" href="https://campuscantina.com/">Campus Cantina</a> <a href="https://github.com/henzonz/CampusCantina-copy" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <div className="project_text">Developed an eCommerce website within a SCRUM team of six people as a frontend member.
                Frontend designed and built using Javascript, HTML and CSS with Bootstrap.
                REST backend was created using Javascript, Node.js, Express.js, Redux and MySQL.
                Website is hosted using AWS EC2.
              </div>
            </div>

            <div className="project_tags d-inline-flex justify-content-around float-right font-italic">
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">HTML</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">CSS</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">Bootstrap</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">MySQL</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">Javascript</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">Redux</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">React</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">VSCode</div>
              <div className="pr-1 light_text mobile-project__tagtexts hide_tagtexts">Figma</div>
            </div>
          </div>
        </div>


        <div className="row p-5">
          <div className="col1 col text-center order-last border-0 rounded">
            <img className="project_img shadow-lg img-fluid rounded  project-border" src={Hercules} style={{ height: '250px', width: '450px' }} />
          </div>
          <div className="col align-self-center right_margin hide_text">
            <div className="col2_rmargin text-light text-center p-1 rounded">
              <div className="h4"> <a className="nounderline_link text-light" target="_blank" href="https://sites.google.com/view/fitapp-repcounter/home">Hercules</a> <a href="https://github.com/henzonz/Hercules-copy" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <div className="project_text">A fitness rep counter app developed by a team of three people using Swift.
                Utilized iPhone's hardware sensors such as gyroscope, accelerometer and proximity sensors to count reps
                of push ups, pull ups, and sit ups. Implemented work out logs using Firebase.
              </div>
            </div>
            <div className="project_tags d-inline-flex justify-content-around float-left font-italic">
              <div className="pr-1 lgscreen-project__tagtexts">Swift</div>
              <div className="pr-1 lgscreen-project__tagtexts">Firebase</div>
            </div>
          </div>
          <div className="col align-self-center right_margin right_margin2">
            <div className="col2_rmargin text-light text-center p-1">
              <div className="h4"> <a className="nounderline_link text-light" target="_blank" href="https://sites.google.com/view/fitapp-repcounter/home">Hercules</a> <a href="https://github.com/henzonz/Hercules-copy" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <div className="project_text">A fitness rep counter app developed by a team of three people using Swift.
                Utilized iPhone's hardware sensors such as gyroscope, accelerometer and proximity sensors to count reps
                of push ups, pull ups, and sit ups. Implemented work out logs using Firebase.
              </div>
            </div>
            <div className="project_tags d-inline-flex justify-content-around float-left font-italic text-muted">
              <div className="pr-1 light_text hide_tagtexts">Swift</div>
              <div className="pr-1 light_text hide_tagtexts">Firebase</div>
            </div>
          </div>
        </div>

        <div className="row p-5">
          <div className="col1 col text-center border-0 rounded">
            <img className="project_img shadow-lg img-fluid rounded  project-border" src={RainbowReef} style={{ height: '250px', width: '450px' }} />
          </div>
          <div className="col align-self-center pt-2 left_margin hide_text">
            <div className="col2_lmargin text-light text-center p-1 rounded">
              <div className="h4"> Rainbow Reef <a href="https://github.com/henzonz/Super-Rainbow-Reef-Game" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <div className="project_text">
                Developed a 2D brick breaker-like game using Java that utilized JFrame and Java Swing to create the main window
                and components such as buttons. Practiced software design, debugging and UI design.
              </div>
            </div>
            <div className="project_tags d-inline-flex justify-content-around float-right font-italic">
              <div className="pr-1 lgscreen-project__tagtexts">Java</div>
              <div className="pr-1 lgscreen-project__tagtexts">IntelliJ</div>
            </div>
          </div>
          <div className="col align-self-center pt-2 left_margin left_margin2">
            <div className="col2_lmargin text-light text-center p-1">
              <div className="h4"> Rainbow Reef <a href="https://github.com/henzonz/Super-Rainbow-Reef-Game" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <div className="project_text">
                Developed a 2D brick breaker-like game using Java that utilized JFrame and Java Swing to create the main window
                and components such as buttons. Practiced software design, debugging and UI design.
              </div>
            </div>
            <div className="project_tags d-inline-flex justify-content-around float-right font-italic text-muted">
              <div className="pr-1 light_text hide_tagtexts">Java</div>
              <div className="pr-1 light_text hide_tagtexts">IntelliJ</div>
            </div>
          </div>
        </div>

        <div className="row p-5">
          <div className="col1 col text-center order-last border-0 rounded">
            <img className="project_img shadow-lg img-fluid rounded project-border" src={Calculator} style={{ height: '250px', width: '450px' }} />
          </div>
          <div className="col align-self-center right_margin hide_text">
            <div className="col2_rmargin text-light text-center p-1 rounded">
              <div className="h4"> Calculator <a href="https://github.com/henzonz/Calculator-GUI-asmt-" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <div className="project_text"> Created a graphic user interface calculator using Java that practices GUI implementation.
                Applied basic object-oriented programming techniques: encapsulation, inheritance, and polymorphism.
              </div>
            </div>
            <div className="project_tags d-inline-flex justify-content-around float-left font-italic">
              <div className="pr-1 lgscreen-project__tagtexts">Java</div>
              <div className="pr-1 lgscreen-project__tagtexts">IntelliJ</div>
            </div>
          </div>
          <div className="col align-self-center right_margin2">
            <div className="col2_rmargin text-light text-center p-1">
              <div className="h4"> Calculator <a href="https://github.com/henzonz/Calculator-GUI-asmt-" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <div className="project_text"> Created a graphic user interface calculator using Java that practices GUI implementation.
                Applied basic object-oriented programming techniques: encapsulation, inheritance, and polymorphism.
              </div>
            </div>
            <div className="project_tags d-inline-flex justify-content-around float-left font-italic text-muted">
              <div className="pr-1 light_text hide_tagtexts">Java</div>
              <div className="pr-1 light_text hide_tagtexts">IntelliJ</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="project-section">
        <div className="main-div">
          <img className="shadow-lg rounded project-border" src={Kusinanichichi} style={{ height: '250px', width: '450px' }} />
          <div className="secondary-div project_text text-light rounded">
          <div className="h4 text-center"> <a className="nounderline_link text-light" target="_blank" href="https://www.kusinanichichi.com/">Kusinanichichi</a> <a href="https://github.com/henzonz/Kusinanichichi" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
            <div className="p-2">A React full-stack website for a restaurant that uses Javascript, HTML and CSS with Bootstrap for frontend.
            REST backend utilizes Node.js, Express.js and MySQL. The project is deployed using Heroku and Netlify.</div>
          </div>
        </div>
      </div> */}

      <div className="text-muted text-center">@2021 Henzon Zambrano</div>
    </div>
  );
}

export default Portfolio;
