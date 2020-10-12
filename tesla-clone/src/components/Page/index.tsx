import React from 'react';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            {name: 'Death Note', description: 'Ranked #36, Popularity #7'},
            {name: 'Hunter x Hunter', description: 'Ranked #2, Popularity #14'},
            {name: 'Kimetsu No Yaiba', description: 'Ranked #46, Popularity #45'},
            {name: 'Naruto', description: 'Ranked #359, Popularity #19'},
            {name: 'No Game No Life', description: 'Ranked #264, Popularity #10'},
            {name: 'Shingueki No Kyojin', description: 'Ranked #112, Popularity #2'},
            {name: 'Tokyo Ghoul', description: 'Ranked #790, Popularity #7'},
        ].map(model => (
          <ModelSection 
              key={model.name}
              className="colored"
              modelName={model.name}
              overlayNode = {
                <DefaultOverlayContent
                  label={model.name}
                  description={model.description}
                />
              }
            />
        ))}
        </div>

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
