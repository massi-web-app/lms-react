import {SingIn} from '../types/sigin.types'
import {createData} from "@/core/http-service/http-service";
import {useMutation} from "@tanstack/react-query";

const signIn = (model: SingIn): Promise<void> => createData<SingIn, void>("/signin", model);


type UseSigningOptions = {
    onSuccess?: () => void;
}

export const useSignIn = ({onSuccess}: UseSigningOptions) => {

    const {mutate: submit, isPending} = useMutation({
        mutationFn: signIn,
        onSuccess: onSuccess
    });


    return {
        submit,
        isPending
    }
}