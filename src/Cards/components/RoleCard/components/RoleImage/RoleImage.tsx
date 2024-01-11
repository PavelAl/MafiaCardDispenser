import { Image } from '@chakra-ui/react';
import { FC } from 'react';

import { Role } from '~/GameSetup/types';

import Boss from './Boss.jpg';
import Citizen from './Citizen.jpg';
import Doctor from './Doctor.jpg';
import Mafia from './Mafia.jpg';
import Maniac from './Maniac.jpg';
import Putana from './Putana.jpg';
import Sheriff from './Sheriff.jpg';

type Props = {
  role: Role;
  onClick?: () => void;
};

export const RoleImage: FC<Props> = ({ role, onClick }) => {
  return !role ? (
    <div>No such card</div>
  ) : (
    <Image src={getRoleSVG(role)} alt={'Loading...'} onClick={onClick} />
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
