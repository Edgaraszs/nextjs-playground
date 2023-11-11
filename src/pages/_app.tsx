import '../app/global.css';
import { AppProps } from 'next/app';
import Layout from '@/components/layout';
import { ToastContainer } from 'react-toastify';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer/>
    </>
  );
}