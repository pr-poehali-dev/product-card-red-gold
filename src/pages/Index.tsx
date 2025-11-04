import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["home", "about", "portfolio", "services", "process", "why", "contact"];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const portfolioItems = [
    {
      title: "Премиум косметика",
      description: "Серия карточек для элитной косметики с акцентом на роскошь",
      image: "https://cdn.poehali.dev/projects/cd323fb1-4c07-4dbc-ad7e-569e8cc62494/files/8ac0a4bc-5fb6-4ca9-bf0c-d3ab2807c870.jpg",
    },
    {
      title: "Дизайнерские аксессуары",
      description: "Минималистичные карточки для модных аксессуаров",
      image: "https://cdn.poehali.dev/projects/cd323fb1-4c07-4dbc-ad7e-569e8cc62494/files/d3831d05-1e8a-4661-9489-02565d080878.jpg",
    },
    {
      title: "Ювелирные изделия",
      description: "Элегантные карточки с золотыми акцентами",
      image: "https://cdn.poehali.dev/projects/cd323fb1-4c07-4dbc-ad7e-569e8cc62494/files/7e4f77e3-9791-4a42-bd67-d5df400fd054.jpg",
    },
  ];

  const services = [
    {
      icon: "Palette",
      title: "Индивидуальный дизайн",
      description: "Уникальные карточки товаров, созданные под стиль вашего бренда",
    },
    {
      icon: "Sparkles",
      title: "Премиум визуализация",
      description: "Фотореалистичная обработка изображений с акцентом на детали",
    },
    {
      icon: "TrendingUp",
      title: "Повышение конверсии",
      description: "Дизайн, который превращает посетителей в покупателей",
    },
    {
      icon: "Zap",
      title: "Быстрая реализация",
      description: "Готовые карточки в течение 3-5 рабочих дней",
    },
  ];

  const processSteps = [
    { number: "01", title: "Изучение", description: "Анализирую ваш продукт и целевую аудиторию" },
    { number: "02", title: "Концепция", description: "Разрабатываю визуальную концепцию карточек" },
    { number: "03", title: "Реализация", description: "Создаю финальный дизайн с учётом всех правок" },
    { number: "04", title: "Передача", description: "Предоставляю все файлы в нужных форматах" },
  ];

  const whyChoose = [
    { icon: "Award", text: "Опыт работы с премиум-брендами" },
    { icon: "Eye", text: "Внимание к деталям и эстетике" },
    { icon: "Users", text: "Понимание психологии покупателя" },
    { icon: "CheckCircle", text: "Гарантия качества и сроков" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gold">Portfolio</div>
            <div className="hidden md:flex items-center gap-8">
              {["home", "about", "portfolio", "services", "process", "why", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {section === "home" ? "Главная" : 
                   section === "about" ? "Обо мне" :
                   section === "portfolio" ? "Портфолио" :
                   section === "services" ? "Услуги" :
                   section === "process" ? "Процесс" :
                   section === "why" ? "Почему я" :
                   "Контакты"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gold">
            Дизайн карточек товаров
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Превращаю обычные товары в объекты желания через визуальный дизайн
          </p>
          <Button 
            size="lg" 
            className="animate-glow text-lg px-8 py-6"
            onClick={() => scrollToSection("contact")}
          >
            Начать проект
          </Button>
        </div>
      </section>

      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold mb-8 text-gold">Обо мне</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Я специализируюсь на создании карточек товаров, которые останавливают взгляд и побуждают к покупке. 
              Каждый элемент дизайна продуман с точки зрения психологии восприятия и эстетики.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мой подход — это сочетание минимализма, роскоши и функциональности. 
              Я создаю не просто красивые изображения, а инструменты продаж, которые работают.
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gold">Портфолио</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-gold/20 hover:border-gold transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-gold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gold">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 border-gold/20 hover:border-gold transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                <div className="mb-4">
                  <Icon name={service.icon} size={40} className="text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gold">Процесс работы</h2>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="flex gap-8 mb-12 last:mb-0 animate-slide-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-6xl font-bold text-gold/20">{step.number}</div>
                <div className="flex-1 border-l-2 border-gold/30 pl-8 pb-8">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gold">Почему стоит выбрать меня</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg border border-gold/20 hover:border-gold transition-colors duration-300"
              >
                <Icon name={item.icon} size={48} className="text-gold mb-4" />
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 text-gold">Свяжитесь со мной</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Готовы создать карточки товаров, которые будут продавать? Напишите мне, и мы обсудим ваш проект
            </p>
            <Card className="p-8 border-gold/20">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Расскажите о вашем проекте"
                    rows={5}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <Button size="lg" className="w-full text-lg py-6">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Portfolio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
