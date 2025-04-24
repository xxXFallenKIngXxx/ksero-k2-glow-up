
const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-k2blue-300 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=900&auto=format&fit=crop" 
                alt="Zespół K2 System" 
                className="rounded-lg shadow-lg relative z-10 object-cover w-full h-[400px]"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">O firmie KSERO-K2 SYSTEM</h2>
            <p className="text-gray-700 mb-4">
              Nasza firma działa na rynku od ponad 15 lat, zapewniając profesjonalne rozwiązania biurowe dla firm różnej wielkości. Specjalizujemy się w sprzedaży, serwisie i dzierżawie urządzeń biurowych najwyższej jakości.
            </p>
            <p className="text-gray-700 mb-4">
              Nasz zespół składa się z doświadczonych specjalistów, którzy służą fachową pomocą i doradztwem. Stawiamy na indywidualne podejście do każdego klienta oraz budowanie długotrwałych relacji biznesowych.
            </p>
            <p className="text-gray-700 mb-8">
              Dzięki wieloletniemu doświadczeniu i stałej współpracy z renomowanymi producentami, możemy zaoferować najlepsze rozwiązania dostosowane do potrzeb i możliwości finansowych naszych klientów.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-k2blue-500">15+</div>
                <p className="text-gray-600 text-sm">Lat doświadczenia</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-k2blue-500">500+</div>
                <p className="text-gray-600 text-sm">Zadowolonych klientów</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-k2blue-500">24/7</div>
                <p className="text-gray-600 text-sm">Wsparcie techniczne</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-k2blue-500">100%</div>
                <p className="text-gray-600 text-sm">Satysfakcji</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
