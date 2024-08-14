import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
} from 'react-hook-form';
import { Input, InputProps } from '../../Input/Input';
import { Spacer } from '../../Spacer/Spacer';
import { Text } from '../../Text/Text';

export type FormInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<InputProps, 'value'> & {
  control: Control<TFieldValues>;
  name: TName;
  defaultValue?: FieldPathValue<TFieldValues, TName>;
  shouldUnregister?: boolean;
  onlyNumbers?: boolean;
};

export function FormInput<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  shouldUnregister,
  placeholder,
  defaultValue,
  onlyNumbers,
  ...inputProps
}: FormInputProps<TFieldValues, TName>) {
  return (
    <Controller
      shouldUnregister={shouldUnregister}
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({
        field: { onChange, onBlur, value },
        formState: { errors },
      }) => {
        const handleOnChange = (val: string) => {
          return onlyNumbers
            ? onChange(val.replace(/[^0-9]/g, ''))
            : onChange(val);
        };
        return (
          <>
            <Input
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={handleOnChange}
              value={value}
              {...inputProps}
            />

            {errors?.[name]?.message ? (
              <>
                <Spacer size='xs' />
                <Text>{(errors?.[name]?.message as string) ?? ''}</Text>
              </>
            ) : null}
          </>
        );
      }}
    />
  );
}
