import React from 'react';
import './Home.css';

const handsImage = require('./hands.jpg');
const chooseImage = require('./unnamed.jpg');

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <header className="header">
        <h1>MCloudLearning - Облачные решения для машинного обучения</h1>
        <p>Мы предоставляем готовые алгоритмы ML, датасеты и инструменты для вашего бизнеса.</p>
      </header>

      <section className="about">
        <h2>О нас</h2>
        <p>
          MCloudLearning - это облачный сервис, предоставляющий широкий спектр инструментов для работы с машинным обучением. 
          Мы помогаем стартапам, малому и среднему бизнесу, а также исследователям внедрять ML в свои проекты. 
          Наша платформа предлагает гибкие решения, масштабируемость и удобный интерфейс для работы с алгоритмами ML.
        </p>
      </section>

      <img src={handsImage} alt="Hands" className="header-image" /> 

      <section className="features">
        <h2>Ключевые особенности</h2>
        <ul>
          <li>Готовые алгоритмы машинного обучения</li>
          <li>Обширные наборы данных</li>
          <li>Масштабируемость и гибкость</li>
          <li>Удобный веб-интерфейс</li>
          <li>API для интеграции</li>
        </ul>
      </section>

      <img src={chooseImage} alt="Choose" className="header-image" /> 

      <section className="video">
      <h2 className='video-container-text-color'>Видео о нас</h2>
      <div className="video-container"> { }
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DoFmXBjRGmk?si=P1y_0QBFaCmMq2p0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>

      <section className="contact">
        <h2>Свяжитесь с нами</h2>
        <p>
          Хотите узнать больше о MCloudLearning? Свяжитесь с нами для получения дополнительной информации или демо-доступа.
        </p>
      </section>
    </div>
  );
};

export default Home;