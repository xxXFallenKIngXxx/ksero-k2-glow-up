
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 pt-16">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Profesjonalne <span className="text-k2blue-500">rozwiązania</span> dla Twojego biura
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              Oferujemy kompleksowe usługi w zakresie sprzedaży, serwisu oraz dzierżawy urządzeń biurowych. Zapewniamy najwyższą jakość obsługi i indywidualne podejście do każdego klienta.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Skontaktuj się z nami
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="btn-outline">
                Nasze usługi
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-k2blue-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-k2blue-300 rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1608213314127-c7f04f288a83?q=80&w=900&auto=format&fit=crop" 
                alt="Profesjonalne drukarki i kopiarki" 
                className="rounded-lg shadow-xl relative z-10 object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
