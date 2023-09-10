import { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
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
      <header>
        <h1>Christian Gonzales Portfolio</h1>
        <nav className='navbar navbar-expand-lg bg-primary'>
          {/* passing the current page and the page change handler */}
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* function rendering the page */}
        </nav>
      </header>
      <main>{renderPage()}</main>
      <Footer />
      </>
    );
  }