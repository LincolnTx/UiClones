import React, { Children, useRef, useState } from 'react';
import { AnimeModel } from '../../ModelsContext';

import { Container } from './styles';

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  const [registerModels, setRegisterModels] = useState<AnimeModel[]>([]);


  return (
    <Container ref={wrapperRef}>
      {children}
    </Container>
  );
};

export default ModelsWrapper;
