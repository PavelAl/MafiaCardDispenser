import { FC, useContext } from 'react';

import { GameSetupContext } from '../GameSetup.context';

import { cardsPool } from '~/Cards/data';
import { SwitchField } from '~/Common/components';
import { GameSettings, Role } from '~/GameSetup/types';

export const RoleSwitchField: FC<{ role: Role }> = ({ role }) => {
  const { settings = { players: 0, mafia: 0 }, onChange } = useContext(GameSetupContext);

  const card = cardsPool[role];

  return (
    <SwitchField
      id={role}
      label={card.nameRu}
      checked={Boolean(settings[role as keyof GameSettings])}
      onChange={value => onChange?.({ ...settings, [role]: value })}
    />
  );
};
