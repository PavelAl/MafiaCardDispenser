import { FormControl, FormLabel, Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
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
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    min,
    max,
    value,
    onChange: (valueAsString: string, valueAsNumber: number) => onChange?.(valueAsNumber)
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="200px" alignItems={'flex-end'} gap={4}>
      <Button colorScheme="blue" variant="outline" {...dec}>
        <Remove />
      </Button>

      <FormControl>
        <FormLabel>{label}</FormLabel>

        <Input {...input} />
      </FormControl>

      <Button colorScheme="blue" variant="outline" {...inc}>
        <Add />
      </Button>
    </HStack>
  );
};
