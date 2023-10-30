import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import {
    Notification,
    Navbar,
    Footer,
    AuthProvider,
} from '@/components/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <Notification />
                    <Navbar />
                    {children}
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
