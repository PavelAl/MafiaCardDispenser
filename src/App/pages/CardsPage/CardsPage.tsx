import { Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CardsGalleryPage } from '~/Cards/pages';
import { Role } from '~/GameSetup';

import { CardsPageNavigation } from './CardsPageNavigation';

export const CardsPage: FC = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  const role = (searchParam.get('role') as Role | undefined) ?? undefined;

  const navigateToCard = (role: Role) => {
    setSearchParam({ role });
  };

  return (
    <Stack gap={5}>
      <CardsPageNavigation />

      <CardsGalleryPage selectedRole={role as Role} onRoleSelected={navigateToCard} />
    </Stack>
  );
};
