import Head from 'next/head';
import Header from './components/Header'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
      <title>My Page Title</title>
      <meta name="description" content="A description of my page" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Header />
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        </div>
      </main>
    </div>
  );
}