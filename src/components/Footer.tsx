
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">KSERO-K2 <span className="text-k2blue-300">SYSTEM</span></h3>
            <p className="mb-6">Profesjonalne rozwiązania dla Twojego biura - sprzedaż, serwis i dzierżawa urządzeń biurowych.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-k2blue-600 transition-colors p-2 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-k2blue-600 transition-colors p-2 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="mailto:kontakt@ksero-k2system.pl" className="bg-gray-800 hover:bg-k2blue-600 transition-colors p-2 rounded-full">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Linki</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-k2blue-300 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-k2blue-300 transition-colors">Usługi</a></li>
              <li><a href="#about" className="hover:text-k2blue-300 transition-colors">O nas</a></li>
              <li><a href="#contact" className="hover:text-k2blue-300 transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Kontakt</h4>
            <div className="space-y-3">
              <p>ul. Przykładowa 123</p>
              <p>00-000 Warszawa</p>
              <p>Tel: +48 123 456 789</p>
              <p>Email: kontakt@ksero-k2system.pl</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p>&copy; {currentYear} KSERO-K2 SYSTEM. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
