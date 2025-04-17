import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ВолонтёрПлюс</h3>
            <p className="text-gray-600">
              Помогаем объединять неравнодушных людей для добрых дел.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-primary transition">
                  Проекты
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <address className="not-italic text-gray-600">
              <p>г. Москва, ул. Волонтёрская, 12</p>
              <p>Тел: +7 (123) 456-78-90</p>
              <p>Email: info@volunteer-plus.ru</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} ВолонтёрПлюс. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
