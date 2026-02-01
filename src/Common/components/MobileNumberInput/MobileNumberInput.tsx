import { Button, HStack, Field, NumberInput } from '@chakra-ui/react';
import { Add, Remove } from '@mui/icons-material';
import { FC } from 'react';

type Props = {
  label?: string;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
};

export const MobileNumberInput: FC<Props> = props => {
  const { label, value, min, max, onChange } = props;

  return (
    <HStack maxW="200px" alignItems={'flex-end'} gap={4}>
      <Button
        colorScheme="blue"
        variant="outline"
        onClick={() => onChange?.(Math.max(min ?? 0, (value ?? 0) - 1))}
      >
        <Remove />
      </Button>

      <Field.Root>
        <NumberInput.Root
          min={min}
          max={max}
          value={value?.toString()}
          onValueChange={e => onChange?.(Number(e.value))}
        >
          <NumberInput.Label>{label}</NumberInput.Label>

          <NumberInput.Input />
        </NumberInput.Root>
      </Field.Root>

      <Button
        colorScheme="blue"
        variant="outline"
        onClick={() => onChange?.(Math.min(max ?? Infinity, (value ?? 0) + 1))}
      >
        <Add />
      </Button>
    </HStack>
  );
};
