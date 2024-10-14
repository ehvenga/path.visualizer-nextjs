'use client';

// import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import Toolbar from '@/components/Toolbar';
import Legend from '@/components/Legend';
import Grid from '@/components/Grid';
import { PathfindingProvider } from '@/context/PathfindingContext';
import { TileProvider } from '@/context/TileContext';
import { SpeedProvider } from '@/context/SpeedContext';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Pathfinding Visualizer',
//   description:
//     'An interactive web application designed to demonstrate the functionality of various pathfinding algorithms',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <PathfindingProvider>
        <TileProvider>
          <SpeedProvider>
            <body className={`${inter.className} flex flex-col min-h-screen`}>
              <header>
                <Toolbar />
                <Legend />
              </header>
              <main>
                <Grid />
                {children}
              </main>

              <footer className='mt-auto'>
                <Footer />
              </footer>
            </body>
          </SpeedProvider>
        </TileProvider>
      </PathfindingProvider>
    </html>
  );
}
