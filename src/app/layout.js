import { AppProvider } from '@/feature/context';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Smart Education',
  description: 'Smart Education is the key to future',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`container ${inter.className}`}>
        <AppProvider>
          <div className="wrapper">{children}</div>
        </AppProvider>
      </body>
    </html>
  );
}
