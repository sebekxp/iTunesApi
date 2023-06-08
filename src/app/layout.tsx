import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './Providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Home',
  description: 'Home page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
