import Logopage from './logo.png';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {useState} from 'react';
import {CiTextAlignCenter} from "react-icons/ci";
import {FaTimes} from "react-icons/fa";
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const navigation = () =>{
        setOpenMenu(!openMenu);
    }

    
    return (
        <div className="main-navbar">
            <div className="logo1">
                <img src={Logopage} alt="logo" id="logo"/>
            </div>
            <div className="pages">
            <Link to="/" className="nav-pages">HOME</Link>
            <Link to="/about" className="nav-pages">ABOUT</Link>
            <Link to="/contact" className="nav-pages">CONTACT</Link>
            </div><br/>
            <br/><br/><br/><br/>
            <div className="res-bar">
                <button onClick={navigation} id="btn-bar">
                    {openMenu ? <FaTimes/> : <CiTextAlignCenter/>}
                    
                </button>
                {openMenu &&(
                    <nav className="open-menu">
                        <ul className="side-menu">
                            <li><Link to="/" className="open-menu1">HOME</Link></li>
                            <li><Link to="/" className="open-menu2">ABOUT</Link></li>
                            <li><Link to="/" className="open-menu3">CONTACT</Link></li>
                        </ul>
                    </nav>
                )}
            </div>
            
        </div>
    )
}
export default Navbar;