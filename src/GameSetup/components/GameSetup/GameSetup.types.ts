import { GameSettings } from '~/GameSetup/types';

export interface GameSetupProps {
  settings: GameSettings;
  onChange: (settings: GameSettings) => void;
}
