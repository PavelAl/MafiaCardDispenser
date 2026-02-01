import { Switch, Field } from '@chakra-ui/react';
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
    <Field.Root display="flex" alignItems="center" justifyContent={'space-between'} width={150}>
      <Switch.Root
        id={id}
        checked={checked}
        defaultChecked={checked}
        onCheckedChange={e => onChange?.(e.checked)}
      >
        <Switch.HiddenInput />

        <Switch.Label>{label}</Switch.Label>

        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>
    </Field.Root>
  );
};
