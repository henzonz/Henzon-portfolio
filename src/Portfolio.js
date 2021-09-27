
import './assets/css/App.css';
import './assets/css/bootstrap.min.css'
import ProfilePic from './assets/images/portrait_pic.jpeg'
import CampusCantina from './assets/images/campus_cantina.png'
import Hercules from './assets/images/hercules.png'
import RainbowReef from './assets/images/rainbowreef_game.png'
import Calculator from './assets/images/calculator.png'
import Github from './assets/images/github-icon.png'
import React from "./assets/images/react.svg";


const Portfolio = () => {

  return (
    <div className="page container-fluid">/Users/henzonzambrano/Desktop/personal
      <nav className="nav_bg navbar fixed-top navbar-expand-lg">
        <a class="navbar-brand font-weight-bold pl-4 nav_text" href="#"><span className="h4 border rounded border-left-0 border-right-0">HZ</span></a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link nav_text" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav_text" href="#aboutme">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav_text" href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      {/* Introduction */}
      <div className="container text-center introduction_section">
        <div className="introduction_1 h6 pb-3">Hello! My name is</div>
        <div className="introduction_2 h2 pb-3 font-weight-bold">Henzon Zambrano</div>
        <div className="secondary_color3 text-wrap mx-auto" style={{ width: '14rem' }}>I'm a recent Computer Engineer graduate (2021) with a high interest and passion
        creating memorable digital experiences.
        Currently, I'm working on building and designing my portfolio!
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
            <img className="profile_pic_animation shadow-lg rounded-circle profile_pic" src={ProfilePic} style={{ height: '215px', width: '185px' }}>
            </img>
          </div>
          <div className="col">
            {/* <div className="card shadow-lg">
              <div className="card-body about_me_card">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            </div> */}
            <div className="secondary_color3">Welcome! My name is Henzon and I'm a recent Computer Engineer graduate from SFSU. I've studied both hardware and software but leaning more towards software because I love designing web pages! Being able to bring designs I have in my mind to life digitally is very satisfying and enjoyable. I have few simple projects that are down below. Check them out if you wish! Currently, I'm creating more projects to sharpen my skills. </div>
          </div>
        </div>


      </div>
      {/* right side email address */}
      <div className="email position-fixed rounded p-1"><a className="badge email_text" href="mailto:henzon.zno26@gmail.com"> henzon.zno26@gmail.com </a>
      </div>


      {/* Skillset */}
      <div className="p-3 container text_maroon mt-5">
        <div className="text-center h2"><hr className="float-left w-25" />Skillset<hr className="float-right w-25" /></div>

        <div className="mx-auto w-50">
          <div className="pb-3">
            <div className="font-italic">HTML</div>
            <div className="skill_bar rounded">
              <div className="html rounded"></div>
            </div>
          </div>

          <div className="pb-3">
            <div className="font-italic">CSS</div>
            <div className="skill_bar rounded">
              <div className="css rounded"></div>
            </div>
          </div>

          <div className="pb-3">
            <div className="font-italic">Java</div>
            <div className="skill_bar rounded">
              <div className="java rounded"></div>
            </div>
          </div>

          <div className="pb-3">
            <i class="fab fa-bootstrap"></i><div className="font-italic">Bootstrap</div>
            <div className="skill_bar rounded">
              <div className="bootstrap rounded"></div>
            </div>
          </div>

          <div className="pb-3">
            <div className="font-italic">React</div>
            <div className="skill_bar rounded">
              <div className="react rounded"></div>
            </div>
          </div>
          <div className="pb-3">
            <div className="font-italic">Swift</div>
            <div className="skill_bar rounded">
              <div className="swift rounded"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="h2 text-center text_maroon container">
        <hr className="float-left w-25" /> Projects<hr className="float-right w-25" />
      </div>
      <div id="projects" className="container p-3">
        <div className="row container p-5">
          <div className="col1 col text-center border-0 rounded">
            <img className="project_img shadow-lg img-fluid" src={CampusCantina} style={{height: '250px', width: '450px'}} />
          </div>
          <div className="col-6 col-lg align-self-center pt-2 left_margin hide_text">
            <div className="col2_lmargin text-light text-center p-1">
              <div className="h4"> <a className="nounderline_link text-light" target="_blank" href="https://campuscantina.com/">Campus Cantina</a> <a href="https://github.com/henzonz/CampusCantina-copy" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <p className="project_text">An eCommerce food delivery/takeout website built and designed by a small team of six people. I mainly designed pages of driver side and checkout/cart pages. Used Figma for UI mock ups.
              </p>
            </div>
            
            <div className="campuscantina_tags d-inline-flex justify-content-around float-right font-italic text-muted">
              <div className="pr-1">HTML</div>
              <div className="pr-1">CSS</div>
              <div className="pr-1">Bootstrap</div>
              <div className="pr-1">MySQL</div>
              <div className="pr-1">Javascript</div>
              <div className="pr-1">Redux</div>
              <div className="pr-1">React</div>
              <div className="pr-1">VSCode</div>
              <div className="pr-1">Figma</div>
            </div>
          </div>
          <div className="col align-self-center pt-2 left_margin left_margin2">
            <div className="col2_lmargin text-light text-center p-1">
              <div className="h4"> <a className="nounderline_link text-light" target="_blank" href="https://campuscantina.com/">Campus Cantina</a> <a href="https://github.com/henzonz/CampusCantina-copy" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <p className="project_text">An eCommerce food delivery/takeout website built and designed by a small team of six people. I mainly designed pages of driver side and checkout/cart pages. Used Figma for UI mock ups.
              </p>
            </div>
            
            <div className="campuscantina_tags d-inline-flex justify-content-around float-right font-italic text-muted">
              <div className="pr-1 light_text project_tagtexts hide_tagtexts">HTML</div>
              <div className="pr-1 light_text project_tagtexts hide_tagtexts">CSS</div>
              <div className="pr-1 light_text project_tagtexts hide_tagtexts">Bootstrap</div>
              <div className="pr-1 light_text project_tagtexts hide_tagtexts">MySQL</div>
              <div className="pr-1 light_text project_tagtexts hide_tagtexts">Javascript</div>
              <div className="pr-1 light_text project_tagtexts hide_tagtexts">Redux</div>
              <div className="pr-1 light_text project_tagtexts hide_tagtexts">React</div>
              <div className="pr-1 light_text project_tagtexts hide_tagtexts">VSCode</div>
              <div className="pr-1 light_text project_tagtexts hide_tagtexts">Figma</div>
            </div>
          </div>
        </div>


        <div className="row container p-5">
          <div className="col1 col text-center order-last border-0 rounded">
            <img className="project_img shadow-lg img-fluid" src={Hercules} style={{height: '250px', width: '450px'}}/>
          </div>
          <div className="col align-self-center right_margin hide_text">
            <div className="col2_rmargin text-light text-center p-1">
              <div className="h4"> <a className="nounderline_link text-light" target="_blank" href="https://sites.google.com/view/fitapp-repcounter/home">Hercules</a> <a href="https://github.com/henzonz/Hercules-copy" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <p className="project_text">A fitness app that uses the gyroscope, accelerometer and proximity sensors from the iPhone to keep track of repetitions.
              </p>
            </div>
            <div className="campuscantina_tags d-inline-flex justify-content-around float-left font-italic text-muted">
              <div className="pr-1">Swift</div>
              <div className="pr-1">Firebase</div>
            </div>
          </div>
          <div className="col align-self-center right_margin right_margin2">
            <div className="col2_rmargin text-light text-center p-1">
              <div className="h4"> <a className="nounderline_link text-light" target="_blank" href="https://sites.google.com/view/fitapp-repcounter/home">Hercules</a> <a href="https://github.com/henzonz/Hercules-copy" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <p className="project_text">A fitness app that uses the gyroscope, accelerometer and proximity sensors from the iPhone to keep track of repetitions.
              </p>
            </div>
            <div className="campuscantina_tags d-inline-flex justify-content-around float-left font-italic text-muted">
              <div className="pr-1 light_text hide_tagtexts">Swift</div>
              <div className="pr-1 light_text hide_tagtexts">Firebase</div>
            </div>
          </div>
        </div>

        <div className="row container p-5">
          <div className="col1 col text-center border-0 rounded">
            <img className="project_img shadow-lg img-fluid" src={RainbowReef} style={{height: '250px', width: '450px'}}/>
          </div>
          <div className="col align-self-center pt-2 left_margin hide_text">
            <div className="col2_lmargin text-light text-center p-1">
              <div className="h4"> Rainbow Reef <a href="https://github.com/henzonz/Super-Rainbow-Reef-Game" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <p className="project_text">A mini 2D game with two levels similar to the game Brick Breaker. Eliminate all the octopus to win the game!
              </p>
            </div>
            <div className="campuscantina_tags d-inline-flex justify-content-around float-right font-italic text-muted">
              <div className="pr-1">Java</div>
              <div className="pr-1">IntelliJ</div>
            </div>
          </div>
          <div className="col align-self-center pt-2 left_margin left_margin2">
            <div className="col2_lmargin text-light text-center p-1">
              <div className="h4"> Rainbow Reef <a href="https://github.com/henzonz/Super-Rainbow-Reef-Game" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <p className="project_text">A mini 2D game with two levels similar to the game Brick Breaker. Eliminate all the octopus to win the game!
              </p>
            </div>
            <div className="campuscantina_tags d-inline-flex justify-content-around float-right font-italic text-muted">
              <div className="pr-1 light_text hide_tagtexts">Java</div>
              <div className="pr-1 light_text hide_tagtexts">IntelliJ</div>
            </div>
          </div>
        </div>

        <div className="row container p-5">
          <div className="col1 col text-center order-last border-0 rounded">
            <img className="project_img shadow-lg img-fluid" src={Calculator} style={{height: '250px', width: '450px'}}/>
          </div>
          <div className="col align-self-center right_margin hide_text">
            <div className="col2_rmargin text-light text-center p-1">
              <div className="h4"> Calculator <a href="https://github.com/henzonz/Calculator-GUI-asmt-" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <p className="project_text">A simple GUI calculator and an object that properly evaluates mathematical expressions by correctly following the order of operations.
              </p>
            </div>
            <div className="campuscantina_tags d-inline-flex justify-content-around float-left font-italic text-muted">
              <div className="pr-1">Java</div>
              <div className="pr-1">IntelliJ</div>
            </div>
          </div>
          <div className="col align-self-center right_margin2">
            <div className="col2_rmargin text-light text-center p-1">
              <div className="h4"> Calculator <a href="https://github.com/henzonz/Calculator-GUI-asmt-" className="fa github_projects fa-github fa-lg text-decoration-none" target="_blank"></a></div>
              <p className="project_text">A simple GUI calculator and an object that properly evaluates mathematical expressions by correctly following the order of operations.
              </p>
            </div>
            <div className="campuscantina_tags d-inline-flex justify-content-around float-left font-italic text-muted">
              <div className="pr-1 light_text hide_tagtexts">Java</div>
              <div className="pr-1 light_text hide_tagtexts">IntelliJ</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-muted text-center">@2021 Henzon Zambrano</div>
    </div>
  );
}

export default Portfolio;
