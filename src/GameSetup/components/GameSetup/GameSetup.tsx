import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { MobileNumberInput, SwitchField } from '~/Common';

import { GameSetupProps } from './GameSetup.types';

export const GameSetup: FC<GameSetupProps> = props => {
  const { settings, onChange } = props;

  return (
    <Stack gap={6} alignItems="center">
      <MobileNumberInput
        label={'Players'}
        value={settings.players}
        min={0}
        onChange={value => onChange({ ...settings, players: value })}
      />

      <MobileNumberInput
        label={'Mafia'}
        value={settings.mafia}
        min={0}
        onChange={value => onChange({ ...settings, mafia: value })}
      />

      <SwitchField
        id={'sheriff'}
        label={'Sheriff'}
        checked={settings.sheriff}
        onChange={value => onChange({ ...settings, sheriff: value })}
      />

      <SwitchField
        id={'boss'}
        label={'Boss'}
        checked={settings.boss}
        onChange={value => onChange({ ...settings, boss: value })}
      />

      <SwitchField
        id={'maniac'}
        label={'Maniac'}
        checked={settings.maniac}
        onChange={value => onChange({ ...settings, maniac: value })}
      />

      <SwitchField
        id={'doctor'}
        label={'Doctor'}
        checked={settings.doctor}
        onChange={value => onChange({ ...settings, doctor: value })}
      />

      <SwitchField
        id={'putana'}
        label={'Putana'}
        checked={settings.putana}
        onChange={value => onChange({ ...settings, putana: value })}
      />

      <SwitchField
        id={'gambler'}
        label={'Шулер'}
        checked={settings.gambler}
        onChange={value => onChange({ ...settings, gambler: value })}
      />

      <SwitchField
        id={'psycho'}
        label={'Псих'}
        checked={settings.psycho}
        onChange={value => onChange({ ...settings, psycho: value })}
      />
    </Stack>
  );
};
