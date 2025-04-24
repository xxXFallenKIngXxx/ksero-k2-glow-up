
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-k2blue-600">
          KSERO-K2 <span className="text-black">SYSTEM</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-k2blue-500 transition-colors font-medium">Home</a>
          <a href="#services" className="text-gray-800 hover:text-k2blue-500 transition-colors font-medium">Usługi</a>
          <a href="#about" className="text-gray-800 hover:text-k2blue-500 transition-colors font-medium">O nas</a>
          <a href="#contact" className="text-gray-800 hover:text-k2blue-500 transition-colors font-medium">Kontakt</a>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-800" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 shadow-md">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#home" className="text-gray-800 hover:text-k2blue-500 transition-colors font-medium" onClick={toggleMobileMenu}>Home</a>
            <a href="#services" className="text-gray-800 hover:text-k2blue-500 transition-colors font-medium" onClick={toggleMobileMenu}>Usługi</a>
            <a href="#about" className="text-gray-800 hover:text-k2blue-500 transition-colors font-medium" onClick={toggleMobileMenu}>O nas</a>
            <a href="#contact" className="text-gray-800 hover:text-k2blue-500 transition-colors font-medium" onClick={toggleMobileMenu}>Kontakt</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
