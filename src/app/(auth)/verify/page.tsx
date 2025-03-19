import Link from 'next/link';
import {VerificationForm} from "@/app/(auth)/verify/_components/verification-form";

const Verify = async ({searchParams}: { searchParams: { [key: string]: string } | string[] | undefined }) => {

    const params=await searchParams;

    return (
        <VerificationForm mobile={params.mobile as string}/>
    )
}

export default Verify;