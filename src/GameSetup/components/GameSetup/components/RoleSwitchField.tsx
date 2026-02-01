import { FC, useContext } from 'react';

import { GameSetupContext } from '../GameSetup.context';

import { cardsPool } from '~/Cards/data';
import { SwitchField } from '~/Common/components';
import { GameSettings, Role } from '~/GameSetup/types';

export const RoleSwitchField: FC<{ role: Role }> = ({ role }) => {
  const { settings = { players: 0, mafia: 0 }, onChange } = useContext(GameSetupContext);

  const card = cardsPool[role];
  console.log(settings);

  return (
    <SwitchField
      id={role}
      label={card.nameRu}
      checked={Boolean(settings[role as keyof GameSettings])}
      onChange={value => {
        console.log({ value, onChange });

        return onChange?.({ ...settings, [role]: value });
      }}
    />
  );
};
