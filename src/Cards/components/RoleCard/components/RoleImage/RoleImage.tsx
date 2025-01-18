import { Image } from '@chakra-ui/react';
import { FC } from 'react';

import { Role } from '~/GameSetup/types';

import Advocate from './Advocate.jpg';
import Amur from './Amur.jpg';
import Boss from './Boss.jpg';
import Citizen from './Citizen.jpg';
import Detective from './Detective.jpg';
import Doctor from './Doctor.jpg';
import Godfather from './Godfather.jpg';
import Hypnotizer from './Hypnotizer.jpg';
import Journalist from './Journalist.jpg';
import LuckyGuy from './LuckyGuy.jpg';
import Mafia from './Mafia.jpg';
import Maniac from './Maniac.jpg';
import Psycho from './Psycho.jpg';
import Putana from './Putana.jpg';
import Rat from './Rat.jpg';
import Santa from './Santa.jpg';
import Sheriff from './Sheriff.jpg';
import Snitch from './Snitch.jpg';
import Thief from './Thief.jpg';
import Widow from './Widow.jpg';

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
    case 'widow':
      return Widow;
    case 'psycho':
      return Psycho;
    case 'advocate':
      return Advocate;
    case 'luckyGuy':
      return LuckyGuy;
    case 'journalist':
      return Journalist;
    case 'hypnotizer':
      return Hypnotizer;
    case 'detective':
      return Detective;
    case 'amur':
      return Amur;
    case 'godfather':
      return Godfather;
    case 'rat':
      return Rat;
    case 'santa':
      return Santa;
    case 'snitch':
      return Snitch;
    case 'thief':
      return Thief;
  }
}
