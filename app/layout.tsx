import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { ChakraProvider } from '@chakra-ui/react'
import { Providers } from './providers'


export const metadata = {
  title: 'Anumérique',
  description: 'Développez vos compétences.',
  images: [
    {
      src: '/assets/logo/logoAnum2.png',
      alt: 'Logo Anum',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Providers>
        <Navbar />
        {children}
        <Footer />
        </Providers>
      </body>
    </html>
  )
}
