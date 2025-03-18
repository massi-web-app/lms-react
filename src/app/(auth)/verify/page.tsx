import Link from 'next/link';
import {VerificationForm} from "@/app/(auth)/verify/_components/verification-form";

const Verify = async ({searchParams}: { searchParams: { [key: string]: string } | string[] | undefined }) => {


    return (
        <VerificationForm mobile={searchParams['mobile'] as string}/>
    )
}

export default Verify;