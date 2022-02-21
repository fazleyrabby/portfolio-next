import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';
import { blogPosts, experiences, projects } from '../lib/data';

export default function Home() {

  const sortExp = experiences.sort(function (a, b) {
    return new Date(b.timeline) - new Date(a.timeline);
  });


  return (
    <Container>
      <Head>
        <title>Portfolio | Fazley 💻</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='mb-auto'>
      <div className='mb-6 custom-section-height flex flex-col justify-center items-center -mt-6'>
      <div className='mb-4'>
      <Image src="/me.jpg" width={240} height={240} className='rounded-full overflow-hidden'/>
      </div>
          <h1 className="lg:text-5xl text-3xl font-bold mb-4">I am Fazley Rabbi <span className="animate-wiggle inline-flex">👋</span></h1>
          <p className='mb-4'>A Passionate Web Developer & Tech Enthusiast</p>
          <p>Based on Bangladesh</p>
        </div>


        <div className='mb-4 custom-section-height'>
        <h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>
          {projects.map((item) => (
            <div key={item.title}>
              <div className='text-2xl mb-2 font-bold'>{item.title}</div>
              <div><a className='' title={item.link} href={item.link}>Link</a></div>
              <div><a className='' title={item.github} href={item.github}>Github</a></div>
              <div className='mb-4'>{item.description}</div>
            </div>
          ))}
        </div>

        <div className='mb-4 custom-section-height'>
        <h1 className="text-3xl font-bold mb-4 text-center ">Experience</h1>
          {experiences.map((item) => (
            <div key={item.name}>
              <div className='text-2xl mb-4 font-bold'>{item.name}</div>
              {/* <div className='mb-4 text-sm'>{item.link}</div> */}
              <div className='mb-4 text-md'>{item.role}</div>
              <div className='mb-4 text-slate-600 dark:text-slate-400'>{item.from} - {item.to}</div>
              <div className='mb-4'>{item.descriptionr}</div>
            </div>
          ))}
        </div>

        <div className='mb-4 custom-section-height'>
        <h1 className="text-3xl font-bold mb-4 text-center ">Blogs</h1>
          <div className="space-y-5">
          {blogPosts.map((item) => (
            <BlogListItem key={item.slug} {...item}/>
          ))}
          </div>
        </div>
      </main>
    </Container>
  );
}

function BlogListItem({slug, title, date, content}) {
  return (<div className="p-4">
    <Link href={`/blog/${slug}`}>
    <a className='text-2xl font-bold mb-2 block'>{title}</a>
    </Link>
    <div className='mb-4 text-sm text-slate-700 dark:text-slate-400'>{date.toString()}</div>
    <div>{content}</div>
  </div>)           
}