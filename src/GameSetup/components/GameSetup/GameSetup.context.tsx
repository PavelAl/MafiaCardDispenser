import { createContext } from 'react';

import { GameSetupProps } from './GameSetup.types';

export const GameSetupContext = createContext<GameSetupContextValue>({});
type GameSetupContextValue = GameSetupProps;
