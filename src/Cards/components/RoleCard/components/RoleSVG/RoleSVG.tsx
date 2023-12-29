import { Image } from '@chakra-ui/react';
import { FC } from 'react';

import { Role } from '~/GameSetup/types';

import Boss from './Boss.svg';
import Citizen from './Citizen.svg';
import Doctor from './Doctor.svg';
import Mafia from './Mafia.svg';
import Maniac from './Maniac.svg';
import Putana from './Putana.svg';
import Sheriff from './Sheriff.svg';

type Props = {
  role: Role;
};

export const RoleSVG: FC<Props> = ({ role }) => {
  return !role ? (
    <div>No such card</div>
  ) : (
    <Image display={{ sm: 'none', md: 'unset' }} src={getRoleSVG(role)} />
  );
};

function getRoleSVG(role: Role) {
  switch (role) {
    case 'citizen':
      return Citizen;
    case 'mafia':
      return Mafia;
    case 'sheriff':
      return Sheriff;
    case 'boss':
      return Boss;
    case 'doctor':
      return Doctor;
    case 'maniac':
      return Maniac;
    case 'putana':
      return Putana;
  }
}
