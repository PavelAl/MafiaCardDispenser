import { GameSettings } from '~/Cards/types';

export interface GameSetupProps {
  settings: GameSettings;
  onChange: (settings: GameSettings) => void;
}
