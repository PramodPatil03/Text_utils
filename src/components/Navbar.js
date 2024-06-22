import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    var tColor = props.mode;
    if(props.mode ==='light'){
        tColor = 'dark';
    }else{
        tColor = 'light';
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                            <li className={`nav-item dropdown bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'} `}>
                                <Link className={`nav-link dropdown-toggle bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Languages
                                </Link>
                                <ul className={`dropdown-menu bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                                    <li><Link className={`dropdown-item bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} to="/java">Java</Link></li>
                                    <li><Link className={`dropdown-item bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} to="/python">Pyton</Link></li>
                                    <li><hr className={`dropdown-divider bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} /></li>
                                    <li><Link className={`dropdown-item bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} to="/C">C</Link></li>
                                </ul>
                            </li>

                        </ul>
                        {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                        <div className={`form-check form-switch text-${tColor}`}>
                            
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

// Navbar.defaultProps = {
//     title: 'Set title',
//     aboutText: 'XYZ'
// }