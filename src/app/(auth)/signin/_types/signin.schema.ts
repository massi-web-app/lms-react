import {z} from 'zod';

export const signInSchema = z.object({
    mobile: z.string()
        .regex(/^09[0-9]{9}$/,{
            message:"شماره موبایل باید 11 رقم باشو و فرمت باید صحیح باشد."
        })
})
