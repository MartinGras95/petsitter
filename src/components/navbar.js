import React from "react"
import { Navbar, Nav } from "react-bootstrap"

import headerStyles from "./header.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw } from '@fortawesome/free-solid-svg-icons'


const Navibar = () => {
  return (
      <Navbar className={headerStyles.navbar}>
        <Navbar.Brand href="/" className={headerStyles.Brand}>
          <FontAwesomeIcon 
            icon={faPaw}
            size="lg"
            className={headerStyles.headerLogo}
          />
          Pet Sitters
        </Navbar.Brand>
          <Nav.Link className={headerStyles.navLink}>About</Nav.Link>
          <Nav.Link className={headerStyles.navLink}>Pets</Nav.Link>
          <Nav.Link className={headerStyles.navLink}>Donate</Nav.Link>


    </Navbar>

  )
}


export default Navibar
