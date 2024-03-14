import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import React from 'react';

interface SwitchFieldProps {
  id: string;
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const SwitchField: React.FC<SwitchFieldProps> = props => {
  const { id, label, checked, onChange } = props;

  return (
    <FormControl display="flex" alignItems="center" justifyContent={'space-between'} width={150}>
      <FormLabel htmlFor={id} mb="0">
        {label}
      </FormLabel>

      <Switch
        id={id}
        checked={checked}
        defaultChecked={checked}
        onChange={e => onChange?.(e.target.checked)}
      />
    </FormControl>
  );
};
