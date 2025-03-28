import {TextInputProps} from './text-input.types'
import {FieldValues, get} from "react-hook-form";
import {Textbox} from '../../textbox';

const TextInput = <TFormValues extends FieldValues>({
                                                               name,
                                                               register,
                                                               errors,
                                                               variant,
                                                               ...rest
                                                           }: TextInputProps<TFormValues>) => {

    const error = get(errors, name);
    const hasError = !!error;

    return (
        <>
            <Textbox
                {...register(name)}
                {
                    ...(hasError ? {variant: 'error'} : {variant: variant})
                }
                {...rest}
            />
            {
                hasError && (
                    <p className="text-sm text-error">
                        {error.message}
                    </p>
                )
            }
        </>
    )

}

export default TextInput;