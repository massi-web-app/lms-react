import "./globals.css";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" dir="rtl">
        <body className="flex flex-col min-h-screen font-bold">
            <header className="bg-gray-200 flex items-center justify-center h-20">
                Header
            </header>
            <main className="flex-1 flex">
                {children}
            </main>
            <footer className="bg-gray-200 flex items-center justify-center">
                Footer
            </footer>
        </body>
        </html>
    );
}
