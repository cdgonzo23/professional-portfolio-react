import { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
  
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
      </header>
      <nav className='navbar navbar-expand bg-primary'>
        {/* passing the current page and the page change handler */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* function rendering the page */}
      </nav>
      <main>
        <div className='content'>
          {renderPage()}
        </div>
        </main>
      <Footer />
      </>
    );
  }