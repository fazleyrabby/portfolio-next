import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../components/Container';
import { experiences, projects } from '../lib/static';

import { format, parseISO } from 'date-fns'

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
        <div className='mb-6 custom-section-height flex flex-col justify-center items-center -mt-6 text-center'>
          <div className='mb-4'>
            <Image src="/me.jpg" width={240} height={240} className='rounded-full overflow-hidden' />
          </div>
          <h1 className="lg:text-5xl text-3xl font-bold mb-4">I am Fazley Rabbi <span className="animate-wiggle inline-flex">👋</span></h1>
          <p className='mb-4'>A Passionate Web Developer & Tech Enthusiast</p>
          <p>Based on Bangladesh</p>
          <svg className="w-6 h-6 mt-12 animate-[bounce_2s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
        </div>


        <div className='mb-48'>
          <h1 className="text-4xl font-bold m-6 text-center">Projects</h1>
          <div className='mx-auto space-y-2 lg:space-y-0 lg:gap-6 lg:grid lg:grid-cols-2'>
            {projects.map((item) => (
              <div class="flex justify-center" key={item.title}>
                <div class="rounded-lg shadow-md hover:shadow-xl bg-white max-w-md">
                  {/* <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt="" />
                  </a> */}
                  <div class="p-6">
                    <h5 class="text-gray-900 text-2xl font-bold mb-2">{item.title}</h5>
                    <p class="text-gray-700 text-base mb-4">
                      Some quick example text to build on the card title and make up the bulk of the card's
                      content.
                    </p>

                    <div className="flex justify-between">
                      <p className='flex space-x-1'>{item.tech?.map(each => (
                        <span className="px-3 py-1  border rounded-md text-slate-500 uppercase text-xs">{each}</span>
                      ))}</p>
                      <div className='flex'>
                        <a href={item.github} class="inline-flex mr-2" title="Github">
                          <svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
                            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                          </svg>
                        </a>

                        <a href={item.github} title="Link">
                        <svg className="w-6 h-6 stroke-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='mb-48'>
          <h1 className="text-4xl font-bold m-6 text-center">Experience</h1>
          <div>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              {experiences.map((item) => (
                <li class="mb-10 ml-4" key={item.name}>
                  <div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.from} - {item.to}</time>
                  <h3 class="text-2xl font-bold">{item.name}</h3>
                  <p class="mb-2 text-sm text-gray-500">{item.role}</p>
                  <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
                  {/* <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className='mb-4'>
          <h1 className="text-4xl font-bold m-6 text-center">Blogs</h1>
          <div className="space-y-5">
            {/* {blogPosts.map((item) => (
              <BlogListItem key={item.slug} {...item} />
            ))} */}
          </div>
        </div>
      </main>
    </Container>
  );
}

function BlogListItem({ slug, title, date, content }) {
  return (<div className="p-4 hover:shadow-xl">
    <Link href={`/blog/${slug}`}>
      <div className='cursor-pointer'>
        <h1 className='text-2xl font-bold mb-2 block '>{title}</h1>
        <div className='mb-4 text-sm text-slate-700 dark:text-slate-400'>{format(parseISO(date),'MMMM do, uuu')}</div>
        <div>{content}</div>
      </div>
    </Link>
  </div>)
}