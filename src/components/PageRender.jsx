import { useState } from 'react';
import Nav from './Nav'
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Projects');
  
    const renderPage = () => {
      if (currentPage === 'Projects') {
        return <Projects />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <>
      <nav>
        {/* passing the current page and the page change handler */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* function rendering the page */}
      </nav>
        <main className="mx-3">{renderPage()}</main>
      </>
    );
  }