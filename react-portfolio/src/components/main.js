import React from 'react'
import { useState } from 'react'
import Portfolio from './portfolio'
import About from './about'
import Contact from './contact'
import Resume from './resume'
import Header from './header'
import Footer from './footer'

export default function Main() {
    const [currentPage, setCurrentPage] = useState('About');

    // This renderPage method returns the appropriate component depending on what the currentPage is set to, which changes based on the navigation tabs being selected.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        {/*currentPage and handlePage change, which are exported from header, are being passed as props */}
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* // the renderPage function is being called and returning the component that matches the currentPage*/}
        {renderPage()}
        <Footer />
      </div>
    );
}