import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../Model';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
          'Model One',
          'Model Tow',
          'Model Three',
          'Model Four',
          'Model Five',
          'Model Six',
          'Model Seven',
        ].map(modelName => (
          <ModelSection 
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode = {
                <DefaultOverlayContent
                  label={modelName}
                  description="Descriprtion of anime one"
                />
              }
            />
        ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
