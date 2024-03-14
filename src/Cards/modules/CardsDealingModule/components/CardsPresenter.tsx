import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';

import { RoleCard } from '~/Cards/components';
import { Role } from '~/GameSetup/types';

interface CardsPresenterProps {
  roles: Role[];
  currentIndex: number;
}

export const CardsPresenter: FC<CardsPresenterProps> = props => {
  const { roles, currentIndex } = props;

  return (
    <Carousel
      selectedItem={currentIndex}
      showArrows={false}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
    >
      {roles.map((card, index) => (
        <RoleCard key={index} role={card} />
      ))}
    </Carousel>
  );
};
