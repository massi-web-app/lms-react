import {z} from 'zod';
import {signInSchema} from './signin.schema';

export type SingIn = z.infer<typeof signInSchema>