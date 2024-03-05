// These styles apply to every route in the application
import '@/styles/globals.css'
import Navbar from "@/components/navbar";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Footer from '@/components/footer';


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
    </>
  );
}
