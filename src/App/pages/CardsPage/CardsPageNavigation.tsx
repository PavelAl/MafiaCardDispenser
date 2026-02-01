import { Button, HStack } from '@chakra-ui/react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { FC } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { cardsPool } from '~/Cards/data';
import { getNext, getPrevious } from '~/Common';
import { Role } from '~/GameSetup';

const rolesList: Role[] = ['citizen', 'sheriff', 'putana', 'doctor', 'mafia', 'boss', 'maniac'];

export const CardsPageNavigation: FC = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  const role = (searchParam.get('role') as Role | undefined) ?? undefined;
  const nextRole: Role = getNext(rolesList, role);
  const prevRole = getPrevious(rolesList, role);

  const navigateToCard = (role: Role) => {
    setSearchParam({ role });
  };

  const navigateToNextCard = () => {
    navigateToCard(nextRole);
  };

  const navigateToPreviousCard = () => {
    navigateToCard(prevRole);
  };

  return (
    <HStack justifyContent={'space-between'}>
      {role && (
        <Button width={120} paddingLeft={0} onClick={navigateToPreviousCard}>
          <ChevronLeft />

          {`${cardsPool[prevRole].name}`}
        </Button>
      )}

      <Link style={{ textDecoration: 'underline' }} to={role ? '/cards' : '/'}>
        {role ? 'Back' : 'Game settings'}
      </Link>

      {role && (
        <Button width={120} paddingRight={0} onClick={navigateToNextCard}>
          {`${cardsPool[nextRole].name}`}

          <ChevronRight />
        </Button>
      )}
    </HStack>
  );
};
