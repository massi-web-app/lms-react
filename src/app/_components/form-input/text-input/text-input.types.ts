import {DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister} from "react-hook-form";
import {TextProps} from '../../textbox/textbox.types';

export type TextInputProps<TFormValues extends FieldValues> = Omit<TextProps, 'name'> & {
    register: UseFormRegister<TFormValues>,
    name: Path<TFormValues>,
    rules?: RegisterOptions,
    errors?: Partial<DeepMap<TFormValues, FieldError>>
}