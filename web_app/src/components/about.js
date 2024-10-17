import React from 'react';
import './about.css'; // Убедитесь, что стиль импортирован правильно

const About = () => {
    return (
        <div lang="en">
            <header className="header">
                <div className="content">
                    <h3>Неліктен бізді таңдау керек?</h3>
                    <p>
                        Біз аптасына 7 күн 24 сағат, жылына 365 күн жұмыс істейміз.<br />
                        Егер сізде мәселе болса, біз оны міндетті түрде шешеміз. Біз 100% жұмыс істейміз, бізде қорқатын ештеңе жоқ.<br />
                        Бізде үнемі жеңілдіктер мен акциялар бар. Сіз әрқашан өзіңізге қолайлы нәрсені таба аласыз.<br />
                        Кейде тапсырыспен бірге тосын сый жібереміз.
                    </p>
                    <a href="https://www.instagram.com/showroom.aminka/" className="link">
                        Есептеу және тапсырыс жасау
                    </a>
                </div>
                <div className="main__images">
                    <svg width="312" height="466">
                        <defs>
                            <pattern id="pattern" width="100%" height="100%">
                                <image xlinkHref="image.jpg" width="312" height="466" preserveAspectRatio="xMidYMin slice" />
                            </pattern>
                        </defs>
                        <path
                             d="M0 0.204529H182.212C275.548 0.204529 351.212 74.8684 351.212 169.205V537H176C78.7979 537 0 458.202 0 361V0.204529Z"
            fill="url(#pattern)"
                        />
                    </svg>
                    
        <svg width="233" height="318">
          <defs>
            <pattern id="patternMin" width="100%" height="100%">
              <image
                xlinkHref="image1.jpg"
                width="233"
                height="318"
                preserveAspectRatio="xMidYMin slice"
              />
            </pattern>
                        </defs>
                        <path
                            d="M0 0H112.227C179.053 0 233.227 54.1735 233.227 121V319H0V0Z"
            fill="url(#patternMin)"
                        />
                    </svg>
                </div>
            </header>
        </div>
    );
};

export default About;
