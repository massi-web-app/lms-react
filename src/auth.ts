import NextAuth from 'next-auth';
import {authConfig} from "@/auth.config";
import CredentialsProvider from  'next-auth/providers/credentials';
import {createData} from "@/core/http-service/http-service";
import {VerifyUserType} from "@/app/(auth)/verify/_types/verify-user.type";
import {UserInterface} from "@/types/user.interface";
import {API_URL} from "@/configs/global";

declare module 'next-auth'{
    interface User{
        accessToken:string
    }
}

export const {signIn,signOut,auth,handlers:{GET,POST}}= NextAuth({
      ...authConfig,
       providers:[
           CredentialsProvider({
               name:"credentials",
               credentials:{
                   username:{
                       label:"username",
                       type:"next"
                   },
                   code:{
                       label:"code",
                       type:"text"
                   }
               },
               async authorize(credentials){
                   try {
                       const user=await createData<VerifyUserType,UserInterface>(`${API_URL}/verify`,{
                           username:credentials.username as string,
                           code:credentials.code as string
                       });

                       console.log(user);
                    return {
                        accessToken:user.token,
                    }

                   }catch (error:unknown){
                        throw new Error("Error");
                   }
               }
           })
       ],

})