import "./globals.css";
import {Figtree} from 'next/font/google';
import localFont from 'next/font/local';
import QueryProvider from '@/providers/react-query-provider';

/**
 * My Components
 */

import {Header} from "./_components/header"
import {Footer} from "./_components/footer"
import NextTopLoader from "nextjs-toploader";
import {Notifications} from "@/app/_components/notificaiton/notifications";
import {AuthProvider} from "@/providers/auth-provider";

const figTree = Figtree({
    display: "swap",
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-figTree"
});

const yekanbakh = localFont({
    src: [
        {
            path: '../../public/fonts/yekanbakh/YekanBakh-Thin.woff2',
            weight: '100',
            style: 'normal'
        },
        {
            path: '../../public/fonts/yekanbakh/YekanBakh-Light.woff2',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../../public/fonts/yekanbakh/YekanBakh-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/yekanbakh/YekanBakh-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/yekanbakh/YekanBakh-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../../public/fonts/yekanbakh/YekanBakh-Heavy.woff2',
            weight: '900',
            style: 'normal'
        }
    ],
    variable: '--font-yekanbakh'
});
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html dir="rtl" className={`dark ${figTree.variable} ${yekanbakh.variable}`}>
        <body
            className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <NextTopLoader showSpinner={false} color="var(--color-primary)"/>
        <Notifications/>
        <AuthProvider>
            <QueryProvider>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
            </QueryProvider>
        </AuthProvider>
        </body>
        </html>
    );
}
