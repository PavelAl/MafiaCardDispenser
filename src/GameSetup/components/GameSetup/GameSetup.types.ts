import { GameSettings } from '~/GameSetup/types';

export type GameSetupProps = {
  settings?: GameSettings;
  canEditPlayers?: boolean;
  onChange?: (settings: GameSettings) => void;
};
