import Head from 'next/head';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio | Fazley 💻</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='mb-auto h-10 '>
        <h1 className="text-5xl font-bold mb-4">I am Fazley Rabbi <span className="animate-wiggle">👋</span></h1>
        <p className='mb-4'>A Passionate Web Developer & Tech Enthusisast</p>
        <p>Based on Bangladesh</p>
      </main>
    </div>
  );
}