import { useState, useEffect } from 'react';

import Header from '../../atoms/Header';
import Footer from '../../atoms/Footer';
import { Wrapper, ButtonWrapper } from './styled';
import Button from '../../atoms/Button';

const DefaultTemplate = ({ children }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const handleToggleVisibility = () => {
    if(window.scrollY > 200) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleToggleVisibility);

    return () => document.removeEventListener('scroll', handleToggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scroll({top: 0, behavior: 'smooth'});
  };

  return (
    <Wrapper>
      <Header />

      {children}

      {isButtonVisible && (
      <ButtonWrapper>
        <Button label="Наверх" color="rgb(128, 50, 200)" onClick={scrollToTop} />
      </ButtonWrapper>)}

      <Footer />
    </Wrapper>
  )
}

export default DefaultTemplate;
