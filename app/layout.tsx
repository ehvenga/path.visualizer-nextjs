import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import Toolbar from '@/components/Toolbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pathfinding Visualizer',
  description:
    'An interactive web application designed to demonstrate the functionality of various pathfinding algorithms',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Toolbar fixed at the top */}
        <header className='fixed top-0 left-0 right-0 z-10'>
          <Toolbar />
        </header>

        {/* Main content with padding to account for fixed Toolbar */}
        <main className='flex-grow pt-16'>{children}</main>

        {/* Footer fixed at the bottom */}
        <footer className='mt-auto'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
