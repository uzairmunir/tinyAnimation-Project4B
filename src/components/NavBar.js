import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.css'

const NavBar = () => {
    return (
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">CodingHub</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        Home <span class="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/services">
                                        Services <span class="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/about">
                                        About <span class="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/contactus">
                                        ContactUs <span class="sr-only">(current)</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default NavBar
