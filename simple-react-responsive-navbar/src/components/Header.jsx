import React, { useState, useEffect } from 'react';
import './Header.css';
import { CSSTransition } from 'react-transition-group';
import burger from '../assets/burger.png'

export default function Header() {

  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

 
  return (
    
    <header className="Header">
      <img src={require('../assets/logo.png')} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/">Главная</a>
          <a href="/">О компании</a>
          <a href="/">Деятельность</a>
          <a href="/">Проекты</a>
          <a href="/">Управление</a>
          <a href="/">Сертификаты и лицензии</a>
          <a href="/">Контакты</a>
      
       
         
   



        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <span role="img">  <img src={burger} width='30px' height='30px'></img> </span>
      </button>
    </header>
  );
}
