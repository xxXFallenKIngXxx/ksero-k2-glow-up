
import { Printer, Settings, FileText, Truck } from 'lucide-react';

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="bg-k2blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Printer size={28} className="text-k2blue-500" />,
      title: 'Sprzedaż urządzeń',
      description: 'Oferujemy szeroki wybór nowoczesnych drukarek, kopiarek i urządzeń wielofunkcyjnych dopasowanych do potrzeb Twojej firmy.',
    },
    {
      icon: <Settings size={28} className="text-k2blue-500" />,
      title: 'Serwis techniczny',
      description: 'Zapewniamy profesjonalny i szybki serwis wszystkich urządzeń biurowych. Gwarantujemy krótki czas reakcji i wysoką jakość usług.',
    },
    {
      icon: <FileText size={28} className="text-k2blue-500" />,
      title: 'Dzierżawa sprzętu',
      description: 'Umożliwiamy dzierżawę urządzeń biurowych na atrakcyjnych warunkach, bez konieczności ponoszenia wysokich kosztów zakupu.',
    },
    {
      icon: <Truck size={28} className="text-k2blue-500" />,
      title: 'Dostawa materiałów',
      description: 'Dostarczamy oryginalne materiały eksploatacyjne, papier oraz akcesoria biurowe bezpośrednio do Twojej firmy.',
    },
  ];
  
  return (
    <section id="services" className="section-padding bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nasze usługi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dostarczamy kompleksowe rozwiązania dla biznesu, które zwiększają wydajność i obniżają koszty operacyjne.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Zapytaj o ofertę
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
