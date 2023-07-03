import {FaArrowRight} from "react-icons/fa";
import Homeimage from './Home.webp';
import './Home.css';
import {Link} from 'react-router-dom';
import {GiEnergySword} from "react-icons/gi"
import {FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";

const Home = () => {
    return(
<div className="main-home">
<div className="first-column">
    <h1 id="intro">I'm Suren Lama </h1>
    <h1 id="role">Front-End</h1>
    <h1 id="dev">Developer</h1>
    <button id="hirebtn">HIRE ME<FaArrowRight/></button>
    <Link to="/projects" id="projects12">PROJECTS <GiEnergySword id="icon"/></Link>
</div>
<div className="social-icons">
<a href="#"><FaFacebook id="facebook"/></a>
<a href="#"><FaLinkedin id="linkedin"/></a>
<a href="#"><FaGithub id="github"/></a>

</div>
<div className="second-column">
    <img src={Homeimage} alt="logo" id="main-body-image"/>
</div>
</div>
    )
}
export default Home;