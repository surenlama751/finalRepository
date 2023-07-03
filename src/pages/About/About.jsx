import './About.css';
import Suren from './Suren.png';
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode  } from "react-icons/fa";
const About =()=>{
    return(
<div className="about-main">
    <div className="information-about">
    <span id="about-me">SUREN LAMA</span>
    <span id="roles1">Junior Full Stack Developer</span>
    <span id="place">Based in Sydney</span>
    </div>
    <div className="about-most-info">
    <div className="first-about-column">
        <div id="biography">BIOGRAPHY<br/><br/>
        <span id="about-first-sen">Work for passion 
        and develop for love! I'm Suren, a<br/> Front End 
        Developer based in Sydney
        </span>
        </div><br/><br/><br/>
        <span id="contact1">CONTACT<br/><br/>
        <span id="about-second-sen">Sydney, Australia <br/>
        surenlama751@gmail.com <br/>
        +6149929059
        </span>
        </span><br/><br/><br/>
        <span id="services">SERVICES<br/><br/>
        <span id="about-third-sen">Website Design,<br/> 
        Help Desk,<br/> Networking
        </span>
        </span>
    </div>
    <div className="about-picture">
        <div id="border">
        <img src={Suren} id="about-profile-pic"/>
        </div>

    </div>
    <div className="about-third-column">
        <span id="years">YEARS OF EXPERIENCE<br/><br/>
        <span id="first-skills">1</span>
        </span><br/>
        <span id="satisfaction">SATISFACTION COUNTS<br/><br/>
        <span id="second-skills">100%</span>
        </span><br/>
        <span id="countries">NUMBER OF COUNTRIES<br/><br/>
        <span id="third-skills">80+</span>
        </span><br/>
        <span id="projects-done">PROJECTS DONE<br/><br/>
        <span id="fourth-skills">2</span>
        </span><br/>
    </div>
    </div>
    <div className="tech-skills">
        <FaHtml5 id="html"/>
        <FaCss3Alt id="css"/>
        <FaJs id="js"/>
        <FaReact id="react"/>
        <FaNode id="node"/>

    </div>
</div>
    )
};
export default About;