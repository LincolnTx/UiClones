import { useTransform } from 'framer-motion';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { AnimeModel } from '../ModelsContext';
import useWapperScroll from '../userWrapperScroll';

import { Container } from './styles';

interface Props {
  model: AnimeModel;
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({model, children}) => {
  const getSetctionDimesnsions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight
    } as SectionDimensions

  }, [model.sectionRef]);

  const [dimensions, setDimensions] = useState<SectionDimensions>(getSetctionDimesnsions);

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSetctionDimesnsions()));
    }

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [getSetctionDimesnsions]);
  
  const { scrollY } = useWapperScroll();

  const sectionScrollProgress = useTransform(scrollY, y => (y - dimensions.offsetTop) / dimensions.offsetHeight);

  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1,0]
  );

  const pointerEvents = useTransform(opacity, value => value > 0 ? 'auto' : 'none' );


  return (
    <Container style={{ opacity, pointerEvents }}>
      {children}
    </Container>
  );
};

export default ModelOverlay;
