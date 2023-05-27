import Head from 'next/head';
import Navbar from './navbar';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>REST countries</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main>{children}</main>
    </>
  )
}