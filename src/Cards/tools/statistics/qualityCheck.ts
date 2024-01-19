import { Card } from '~/Cards/types';
import { GameSettings, Role } from '~/GameSetup/types';

export function checkThatMafiaSitsToClose(deck: Card[], gameSettings: GameSettings) {
  const mafiaCount = gameSettings.mafia + (gameSettings.boss ? 1 : 0);

  if (mafiaCount < 3) return false;

  const rolesDeck: Role[] = deck.map(card => (card.role === 'boss' ? 'mafia' : card.role));

  const toClose = findLongestRepeatedSequence(rolesDeck, 'mafia') >= 3;

  return toClose;
}

export function findLongestRepeatedSequence<T>(arr: T[], accurance?: T) {
  const n = arr.length;
  let maxLength = 0;
  let currentLength = 0;

  for (let i = 0; i < n; i++) {
    let j = (i + 1) % n; // To handle cyclic array
    while (arr[j] === (accurance ?? arr[i])) {
      currentLength++;
      j = (j + 1) % n;
    }

    maxLength = Math.max(maxLength, currentLength);
    currentLength = 0; // Reset for the next sequence
  }

  return maxLength;
}
