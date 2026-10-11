"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Play, Check, Smartphone, Radio, Users, Shield, Zap, Wifi } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = async () => {
    if (!email) return;
    
    setIsDownloading(true);
    
    // Имитация запроса на сервер
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      
      // Реальная ссылка на скачивание APK
      const downloadLink = "http://45.147.31.67:8000/download/shalun2-1.6.1+9.apk";
      
      // Автоматическое скачивание
      const link = document.createElement('a');
      link.href = downloadLink;
      link.download = "shalun2-1.6.1+9.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 2000);
  };

  const features = [
    {
      icon: <Radio className="w-8 h-8 text-amber-500" />,
      title: "Push-to-Talk",
      description: "Классическое управление рацией - нажал и говоришь"
    },
    {
      icon: <Wifi className="w-8 h-8 text-amber-500" />,
      title: "Интернет связь",
      description: "Работает везде, где есть интернет"
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: "Групповые чаты",
      description: "Создавайте каналы для команды"
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      title: "Безопасность",
      description: "Шифрование голоса и текста"
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Быстрая связь",
      description: "Минимальная задержка голоса"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-amber-500" />,
      title: "Только Android",
      description: "Оптимизировано для Android устройств"
    }
  ];

  const testimonials = [
    {
      name: "Иван Петров",
      role: "Дальнобойщик",
      text: "Лучшее приложение для связи на трассе! Никаких абонентской платы, работает даже в глухомани."
    },
    {
      name: "Алексей Сидоров",
      role: "Логист",
      text: "Рация спасла наш бизнес. Теперь координируем фуры по всей России без проблем."
    },
    {
      name: "Михаил Козлов",
      role: "Водитель фуры",
      text: "Просто, удобно, бесплатно. Что еще нужно? Работает стабильно, качество связи отличное."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Навигация */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-700' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Radio className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold text-white">Шалун 2</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Фичи</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">Как работает</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Отзывы</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Фоновый паттерн */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Radio className="w-12 h-12 text-amber-500 animate-pulse-slow" />
              <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                Шалун 2
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 mb-6">
              Бесплатная рация для дальнобойщиков и логистов
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Push-to-talk связь, которая работает везде, где есть интернет. Никаких абонентской платы, никаких ограничений.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-primary flex items-center space-x-2 text-lg"
            >
              <Download className="w-5 h-5" />
              <span>Скачать бесплатно</span>
            </button>
            <a href="#features" className="btn-secondary flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Узнать больше</span>
            </a>
          </motion.div>

          {/* Статистика */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">10K+</div>
              <div className="text-gray-400">Активных пользователей</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-gray-400">Городов coverage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">4.8⭐</div>
              <div className="text-gray-400">Рейтинг в Google Play</div>
            </div>
          </motion.div>
        </div>

        {/* Декоративные элементы */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Фичи */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Почему Шалун 2?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Простое и мощное решение для связи в дороге
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 card-hover"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Как работает */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Как это работает?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Всего 3 простых шага до начала связи
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Скачай приложение</h3>
              <p className="text-gray-400">Установи Шалун 2 из нашего APK файла</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Зарегистрируйся</h3>
              <p className="text-gray-400">Создай аккаунт с позывным</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Начни общаться</h3>
              <p className="text-gray-400">Нажми кнопку и говори!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Отзывы пользователей</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Что говорят те, кто уже использует Шалун 2
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Частые вопросы</h2>
            <p className="text-xl text-gray-400">
              Ответы на самые популярные вопросы
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">Это бесплатно?</h3>
              <p className="text-gray-400">Да, Шалун 2 полностью бесплатен. Никаких абонентской платы, скрытых платежей или ограничений.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">Нужен ли интернет?</h3>
              <p className="text-gray-400">Да, для работы приложения нужен интернет. Но связь работает даже при нестабильном соединении.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">Работает ли это за границей?</h3>
              <p className="text-gray-400">Да, приложение работает везде, есть доступ к интернету. Никаких роуминговых платежей.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">Какое качество связи?</h3>
              <p className="text-gray-400">Качество голоса зависит от скорости интернет-соединения. При хорошем интернете качество как у обычного звонка.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Готовы попробовать?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Скачайте Шалун 2 прямо сейчас и начните общаться бесплатно
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primary text-lg"
          >
            Скачать бесплатно
          </button>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Radio className="w-8 h-8 text-amber-500" />
              <span className="text-xl font-bold text-white">Шалун 2</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Поддержка</a>
              <a href="#" className="hover:text-white transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500">
            © 2024 Шалун 2. Все права защищены.
          </div>
        </div>
      </footer>

      {/* Модальное окно скачивания */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-slate-800 rounded-xl p-8 max-w-md w-full mx-4 border border-slate-700"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Скачать Шалун 2</h3>
                <p className="text-gray-400 mb-6">
                  Введите ваш email для получения ссылки на скачивание
                </p>
                
                {!downloadSuccess ? (
                  <div className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                    />
                    <button
                      onClick={handleDownload}
                      disabled={!email || isDownloading}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isDownloading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Скачивание...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Download className="w-5 h-5" />
                          <span>Скачать APK</span>
                        </div>
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Успешно!</h4>
                    <p className="text-gray-400 mb-4">
                      Ссылка на скачивание отправлена на вашу почту
                    </p>
                    <p className="text-sm text-gray-500">
                      Файл: shalun2-1.6.1+9.apk (34.7 MB)
                    </p>
                  </div>
                )}
                
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setDownloadSuccess(false);
                    setEmail("");
                  }}
                  className="mt-6 text-gray-400 hover:text-white transition-colors"
                >
                  Закрыть
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}