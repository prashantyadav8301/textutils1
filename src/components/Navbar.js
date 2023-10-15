import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:props.mode==='light'?'rgb(12 233 196)':''}}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${props.active1}`} onClick={props.activeStatus1} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={props.activeStatus1}>
              <Link className={`nav-link ${props.active1}`} to="/">{props.home}</Link>
            </li>
            <li className="nav-item" onClick={props.activeStatus2}>
              <Link className={`nav-link ${props.active2}`} to="/about">About</Link>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" id="flexSwitchCheckDefault1" disabled={props.mode!=='dark' && props.mode!=='light'?'disabled':''} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault1">Dark Mode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'danger':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" id="flexSwitchCheckDefault2" disabled={props.mode!=='danger' && props.mode!=='light'?'disabled':''} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">Danger Mode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'success':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode3} type="checkbox" id="flexSwitchCheckDefault3" disabled={props.mode!=='success' && props.mode!=='light'?'disabled':''} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault3">Success Mode</label>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'warning':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode4} type="checkbox" id="flexSwitchCheckDefault4" disabled={props.mode!=='warning' && props.mode!=='light'?'disabled':''} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault4">Warning Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Title must required",
  home: "Here will be home"
}