import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode  } from "react-icons/fa";
import './Contact.css';
import contactimage from './contact.jpeg';
const Contact = () => {
    return(
       
        <div className="contact-main">

            <div className="container">
     
            <div className="contact-form">
            <span id="head-line">Contact Us</span>
                <div className="border-contact">
                <form className="contact-form">
                    <div className="contact-first-column">
                 <input placeholder="Full Name" id="contact-full-name"></input><br/>  
                 <input placeholder="E-mail" id="contact-email"></input><br/>
                 <textarea id="myTextarea" placeholder="Message"></textarea><br/>
                 <button id="contact-btn">Contact Us</button> 
                 </div>
                 <div className="space">
                     <div className="contact-second-column">
                     
                    <span id="contact22">Contact
                    <span id="company-email">surenlama751@gmail.com</span>
                    </span>
                    <span id="contact33">Based in
                    <span id="arearegion">Sydney, Australia</span>
                    </span>
                    <div className="contact-social-icons">
                    <FaHtml5 id="html1"/>
                     <FaCss3Alt id="css1"/>
                     <FaJs id="js1"/>
                     <FaReact id="react1"/>
                     <FaNode id="node1"/>
                    </div>
                    </div>

                 </div>
                </form>
                </div>

                
            </div>

            </div>
        </div>
    )
}
export default Contact;