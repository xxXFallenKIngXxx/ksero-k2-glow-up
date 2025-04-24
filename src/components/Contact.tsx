
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skontaktuj się z nami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jesteśmy gotowi odpowiedzieć na wszystkie Twoje pytania i pomóc w doborze najlepszych rozwiązań dla Twojej firmy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Wyślij wiadomość</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Imię i nazwisko</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-k2blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-k2blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-k2blue-300"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Wiadomość</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-k2blue-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Dane kontaktowe</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-k2blue-50 rounded-full p-3">
                    <Phone size={24} className="text-k2blue-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium">Telefon</h4>
                    <a href="tel:+48123456789" className="text-k2blue-500 hover:underline">+48 123 456 789</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-k2blue-50 rounded-full p-3">
                    <Mail size={24} className="text-k2blue-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium">Email</h4>
                    <a href="mailto:kontakt@ksero-k2system.pl" className="text-k2blue-500 hover:underline">kontakt@ksero-k2system.pl</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-k2blue-50 rounded-full p-3">
                    <MapPin size={24} className="text-k2blue-500" />
                  </div>
                  <div>
                    <h4 className="text-gray-700 font-medium">Adres</h4>
                    <p className="text-gray-600">
                      ul. Przykładowa 123<br />
                      00-000 Warszawa
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Godziny pracy</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-600">Poniedziałek - Piątek:</span>
                  <span className="font-medium">8:00 - 16:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sobota:</span>
                  <span className="font-medium">9:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Niedziela:</span>
                  <span className="font-medium">Zamknięte</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
