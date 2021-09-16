import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        < >
            <div className='ten-nav shadow p-1 mb-2 bg-body rounded w-100'>
                <nav className="navbar navbar-expand-lg navbar-light  ">
                    <div className=" container-fluid">
                        <Link className="navbar-brand" to="#"><img className="logo" src="https://static.wixstatic.com/media/693073_ee31d3dcd4064037a097ec905d0c841b~mv2.jpg/v1/fill/w_125,h_100,al_c,q_80,usm_0.66_1.00_0.01/pp_edited.webp" alt="" /> </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul className=" navbar-nav me-auto mb-2 mb-lg-0 " style={{ fontSize: '1.3rem' }}>

                                <li className="nav-item">
                                    <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to="/courses">Online Courses</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active" className="nav-link" to="/hiring">We're Hiring</NavLink>
                                </li>
                                <li className="nav-item">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                More
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><a className="dropdown-item" href="#">Blog</a></li>
                                                <li><a className="dropdown-item" href="#">Certification</a></li>
                                                <li><a className="dropdown-item" href="#">Alumin Team</a></li>
                                                <li><a className="dropdown-item" href="#">Foroum</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                            <div className="d-flex ">
                                <div >
                                    <form className="sech text-box d-flex">
                                        <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
                                        <div className='navbtn'> <SearchIcon /></div>
                                    </form>
                                </div>
                                <Button> <ShoppingCartIcon /></Button>
                                <Button><AccountCircleIcon /></Button>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
        </ >
    )
}

export default Navbar
