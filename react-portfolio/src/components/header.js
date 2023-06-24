import React, { useEffect, useState } from 'react'

export default function Header({currentPage, handlePageChange}) {

  return (
    <header className="header">
      <h2>Ruth Stevens</h2>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#About"
            onClick={() => handlePageChange('About')}
            //  when the onClick eventListener is activated, we pass About through handlePageChange
            //*  this ternary operator is checking to see if the current clicked page is About. if it is, the nav-link is set to active. if it is not, the link is not active.
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}
            //  when the onClick eventListener is activated, we pass Portfolio through handlePageChange
            //below we are checking if currentPage is portfolio. if it is the classname is set to nav-link active.
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handlePageChange('Contact')}
            //  when the contact link is clicked, contact is passed through handlePageChange.
            //below we are checking if currentPage is contact. if it is the classname is set to nav-link active.
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            //  when the contact link is clicked, resume is passed through handlePageChange.
            //below we are checking if currentPage is resume. if it is the classname is set to nav-link active.            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>

    </header>
  )
}
