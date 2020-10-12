import { useTransform } from 'framer-motion';
import React from 'react';
import useWapperScroll from '../Model/userWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="https://github.com/LincolnTx/UiClones" rel="noopener noreferrer" target="_blank" > UI Clone</a>
          </li>
          <li>
            <a href="https://youtube.com/rocketseat" rel="noopener noreferrer" target="_blank"> from Rockeseat</a>
          </li>
          <li>
            <a href="https://github.com/LincolnTx" rel="noopener noreferrer" target="_blank"> by Lincoln</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
