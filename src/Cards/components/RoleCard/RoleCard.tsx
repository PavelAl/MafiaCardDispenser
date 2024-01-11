import { FC } from 'react';

import { RoleImage } from './components';
import { RoleCardProps } from './RoleCard.types';

export const RoleCard: FC<RoleCardProps> = props => {
  const { role, onClick } = props;

  return <RoleImage role={role} onClick={onClick} />;
};
