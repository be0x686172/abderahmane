import './style.scss';

import { NavLink } from 'react-router';

const Sidebar = () => {
    return (
        <div className='c-Sidebar'>
            <NavLink to="/" className="title"><h2>abderahmane</h2></NavLink>
            <nav>
                <NavLink to="/about">Bio</NavLink>
                <NavLink to="/projects">Projets</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/cv">CV</NavLink>
            </nav>
            <section>
                <p>Contact</p>
                <div className='d-links'>
                    <a href="mailto:abderahmane.beharrahala@gmail.com"><img src='gmail.png' /><p>Mail</p></a>
                    <a href="https://www.linkedin.com/in/abderahmane-behar-rahala/" target='_blank'><img src='linkedin.png' /><p>LinkedIn</p></a>
                    <a href="https://github.com/be0x686172" target='_blank'><img src='github.png' /><p>GitHub</p></a>
                </div>
            </section>
        </div>
    );
};

export default Sidebar;