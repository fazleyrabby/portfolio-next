import Head from 'next/head';
import Image from 'next/image';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';
import { blogPosts, experiences, projects } from '../lib/data';


export default function Home() {
  return (
    <Container>
      <Head>
        <title>Portfolio | Fazley 💻</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='mb-auto'>
      <div className='mb-6 custom-section-height flex flex-col justify-center items-center -mt-6'>
      <div className='mb-4'>
      <Image src="/me.jpg" width='100%' height='100%' className='rounded-full overflow-hidden'/>
      </div>
      
          <h1 className="lg:text-5xl md:text-3xl sm:text-2xl font-bold mb-4">I am Fazley Rabbi <span className="animate-wiggle">👋</span></h1>
          <p className='mb-4'>A Passionate Web Developer & Tech Enthusisast</p>
          <p>Based on Bangladesh</p>
        </div>


        <div className='mb-4 custom-section-height'>
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
          {projects.map((item) => (
            <div key={item.title}>
              <div className='text-2xl mb-4'>{item.title}</div>
              <div><a className='' title={item.link} href={item.link}>Link</a></div>
              <div><a className='' title={item.github} href={item.github}>Github</a></div>
              <div className='mb-4'>{item.description}</div>
            </div>
          ))}
        </div>

        <div className='mb-4 custom-section-height'>
        <h1 className="text-3xl font-bold mb-4">Experience</h1>
          {experiences.map((item) => (
            <div key={item.name}>
              <div className='text-2xl mb-4'>{item.name}</div>
              <div className='mb-4 text-sm'>{item.link}</div>
              <div className='mb-4'>{item.from} - {item.to}</div>
              <div className='mb-4'>{item.role}</div>
              <div className='mb-4'>{item.descriptionr}</div>
            </div>
          ))}
        </div>

        <div className='mb-4 custom-section-height'>
        <h1 className="text-3xl font-bold mb-4">Blogs</h1>
          {blogPosts.map((item) => (
            <div key={item.title}>
              <div className='text-2xl mb-4'>{item.title}</div>
              <div className='mb-4 text-sm'>{item.date.toString()}</div>
              <div className='mb-4'>{item.content}</div>
            </div>
          ))}
        </div>
      </main>
    </Container>
  );
}