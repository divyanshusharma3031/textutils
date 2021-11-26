import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props)
{
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{border:props.border,caretColor:'blue'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Notifications
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About Us
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className={`form-check form-switch mx-4 text-${props.inside}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
            <div className={`form-check form-switch mx-4 text-${props.inside}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode2} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable High Contrast Mode</label>
</div>
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired
    //is required se ye field [title ] required field ho gayi it means that we have to pass a title for sure otherwise it will generate a warning
}
Navbar.defaultProps={
    title:"Title here"
}
//set isiliye karte hai ki ham ye define kar sake ki konsa data type aana chaiye kaha par.