import React, {useContext} from 'react'
import './Footer.css'
import {ThemeContext} from '../../contexts/ThemeContext'
import {FaLinkedin, FaFacebook} from 'react-icons/fa'
import {socialsData} from '../../data/socialsData'


function Footer() {
  /* const shortname = (name) => {
      if (name.length > 10) {
          return name.split(" ")[0];
      } else {
          return name;
      }
  }; */
  const {theme} = useContext(ThemeContext)

  return (
    <div className="footer" style={{backgroundColor: theme.primary}}>
      <div className="socialLinks">
        <p>Connect With Me : </p>
        {socialsData.linkedIn && (
          <a
            href={socialsData.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              className="socialIcon"
              style={{color: theme.secondary}}
              aria-label="LinkedIn"
            />
          </a>
        )}
        {socialsData.facebook && (
          <a
            href={socialsData.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook
              className="socialIcon"
              style={{color: theme.secondary}}
              aria-label="GitHub"
            />
          </a>
        )}
      </div>
    </div>
  )
}

export default Footer
