import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavUnits = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#"><h1>ADST-1</h1></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to = "/Components/Units/AllReq" className="nav-link navbar-link">All Requests</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to = "/Components/Units/UniAcptReq" className="nav-link navbar-link">AcceptedRequests</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to = "/Components/Units/OpReq" className="nav-link navbar-link">Open Requests</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to = "/" className = "nav-link navbar-link">Logout</Link>
                            </li>
                            {/* <li className="nav-item active">
                                <Link to = "/Components/Units/Unit01" className = "nav-link navbar-link">Supply Request Form</Link>
                            </li> */}

                        </ul>
                    </div>
                </nav>
    
  )
}

export default NavUnits