import { Grid, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { MobileNumberInput } from '~/Common';
import { soloRoles } from '~/GameSetup/types';

import { RoleSwitchField } from './components';
import { GameSetupContext } from './GameSetup.context';
import { GameSetupProps } from './GameSetup.types';

export const GameSetup: FC<GameSetupProps> = props => {
  const { settings = { players: 0, mafia: 0 }, canEditPlayers, onChange } = props;

  return (
    <GameSetupContext.Provider value={props}>
      <Stack gap={6} alignItems="center">
        {canEditPlayers ? (
          <MobileNumberInput
            label={'Players'}
            value={settings.players}
            min={0}
            onChange={value => onChange?.({ ...settings, players: value })}
          />
        ) : (
          <Text fontSize="18" fontWeight={500}>{`Всего участников: ${settings.players}`}</Text>
        )}

        <MobileNumberInput
          label={'Mafia'}
          value={settings.mafia}
          min={0}
          onChange={value => onChange?.({ ...settings, mafia: value })}
        />

        <Grid templateColumns="repeat(2, 1fr)" columnGap="12" gap={6}>
          {soloRoles.slice(0, soloRoles.length / 2).map(role => (
            <RoleSwitchField key={role} role={role} />
          ))}

          {soloRoles.slice(soloRoles.length / 2, soloRoles.length).map(role => (
            <RoleSwitchField key={role} role={role} />
          ))}
        </Grid>
      </Stack>
    </GameSetupContext.Provider>
  );
};
