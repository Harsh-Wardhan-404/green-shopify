
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../App.css';
import '../index.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Cart from '@/components/ui/Cart';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Add any app-wide effects here
  }, []);

  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <Cart />
    </>
  );
}

export default MyApp;
